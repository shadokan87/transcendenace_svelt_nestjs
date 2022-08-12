<script lang="ts">
	import { isLogin } from "../../stores/loginStore";
	import { profile } from "../../stores/loginStore";
	import  axios  from "axios";
	let myprofile = {};
	profile.subscribe( val => myprofile = val);
	const logout = () => {
	axios.get("http://localhost:3000/auth/logout")
		.then( () => { isLogin.update(isLogin => false) } )
		.catch( () => { console.log("logout failed.") } ); 
	};
	let testChan: number = 4;
	const addAdmin = async () => {
		await axios.post("http://localhost:3000/rooms/addAdmin", {
				chanId: testChan,
				school_id: 63276,
		})
		.then( (res) => {
			console.log(res);
		})
		.catch( (e) => {
			console.log(e);
		});
	};

	const banUser = async () => {
		await axios.post("http://localhost:3000/rooms/banUser", {
				chanId: testChan,
				school_id: 63276,
		})
		.then( (res) => {
			console.log(res);
		})
		.catch( (e) => {
			console.log(e);
		});
	};

	const unbanUser = async () => {
		await axios.post("http://localhost:3000/rooms/unbanUser", {
				chanId: testChan,
				school_id: 63276,
		})
		.then( (res) => {
			console.log(res);
		})
		.catch( (e) => {
			console.log(e);
		});
	};

	const getAdmin = async () => {
		await axios.get("http://localhost:3000/rooms/Admin", { params: {chanId: 1} })
		.then( (res) => {
			console.log(res);
		})
		.catch( (e) => {
		});
	};
</script>
<main>
	<h1> This is play page.</h1>
	<h1 style="cursor:pointer" on:click={logout}>logout</h1>
	<button on:click={addAdmin}>add admin</button>
	<button on:click={getAdmin}>get admin</button>
	<button on:click={banUser}>ban user</button>
	<button on:click={unbanUser}>unban user</button>
</main>

<style>
	h1{
		text-align: center;
		color: white;
		font-size: 5em;
	}
</style>
