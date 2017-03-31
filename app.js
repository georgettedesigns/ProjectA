(function () {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAKu7hp8qqSR9gVWHgYu7DTaumBtBoXXxE",
		authDomain: "dashboard-d8a8e.firebaseapp.com",
		databaseURL: "https://dashboard-d8a8e.firebaseio.com",
		projectId: "dashboard-d8a8e",
		storageBucket: "dashboard-d8a8e.appspot.com",
		messagingSenderId: "32824274662"
	};
	firebase.initializeApp(config);

	//Get Elements
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');

	//Add login event
	btnLogin.addEventListener('click', e=> {
		//Get email and pass ** validate email first
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();

		//sign in
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
	});

	
	//Add logout event
	btnLogout.addEventListener('click', e=> {
		firebase.auth().signOut();	
	});


	//Add signup event
	btnSignUp.addEventListener('click', e=> {
		//Get email and pass ** validate email first
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign in
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
	});

	// Add real time listener
	firebase.auth().onAuthStateChanged(firebaseUser =>	{
		if(firebaseUser){ 
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
		}
	});

}());








