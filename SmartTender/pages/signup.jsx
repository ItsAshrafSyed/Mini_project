import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../contexts/UserAuthContexts";
import {useRouter} from 'next/router'

export default function Signup() {
	const {user,signup}=useAuth();
	const router=useRouter();


	const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")
	const [repassword,setRePassword]=useState("")


	const handleSubmit=async (e)=>{
		e.preventDefault()

			try{
				await signup(email,password);
				router.push('/signin');

			}
			catch(e){
				console.log(e)

			}

		console.log(email,password,repassword)

	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 ">
			<div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-md">
				<h3 className="text-2xl font-bold text-center">
					Create Account & Login
				</h3>
				<form action="">
					<div className="mt-4">
						<div>
							<label className="block">Email</label>
							<input

								type="text"
								placeholder="Email"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								onChange={e=>setEmail(e.target.value)}
							/>
						</div>
						<div className="mt-4">
							<label className="block">Password</label>
							<input
								type="password"
								placeholder="Password"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								onChange={e=>setPassword(e.target.value)}

							/>
						</div>
						<div className="mt-4">
							<label className="block">Confirm Password</label>
							<input
								type="password"
								placeholder="Confirm Password"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								onChange={e=>setRePassword(e.target.value)}

							/>
						</div>
						<div className="flex items-baseline justify-between">
							<button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
							onClick={handleSubmit}>
								SignUp
							</button>
							<Link href="/signin">
								<a className="text-sm text-blue-600 hover:underline">Login</a>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
