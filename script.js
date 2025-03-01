async function fetchProfile(){
    const username = document.getElementById('username').value.trim();
    const errorEl = document.getElementById('error'); //error msg element
    const profile = document.getElementById('profile'); //profile section

    errorEl.textContent = ''; //clear previous error msgs
    profile.style.display = 'none'; //hide profile while loading

    //if input is empty, show an error
    if(!username){
        errorEl.textContent='Please enter a Github username';
        return;
    }

    try{
        //Fetch user data from Github API
        const response = await fetch(`https://api.github.com/users/${username}`);

        //if user is not found, throw an error
        if(!response.ok){
            throw new Error('User not found');
        }

        //Convert the response into JSON

        const data = await response.json();

        //Update profile section with Github data

        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name || 'No name provided';
        document.getElementById('bio').textContent = data.bio || 'No bio available';
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('profilelink').href = data.html_url;

        profile.style.display = 'block'; //show profile section
    }
    catch(error){
        errorEl.textContent = error.message;
    }
}
      