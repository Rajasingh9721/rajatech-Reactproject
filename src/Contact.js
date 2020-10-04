import React,{useState} from "react";
const Contact = ()=>{
	const [data, setData] = useState({
		fullname:"",
		phone:"",
		email:'',
		msg:''
	});
	const InputEvent = (event)=>{
		const {name,value}=event.target;
		setData((preVal)=>{
			return{
				...preVal,
				[name]:value,
			}
		})
	}
	const formSubmit = (e)=>{
		e.preventDefault();
		console.log(`${data.fullname},${data.email},${data.phone},${data.msg}`)
}
	return(
		<>
			<div className="my-5">
				<h1 className="text-center"> Contact US</h1>
				<div className="container contact_div">
					<div className="row">
						<div className="col-md-6 col-10 mx-auto">
							<form onSubmit={formSubmit}>
								  <div className="form-group mb-3">
								    <label for="exampleFormControlInput1">
								    	Full Name
								    </label>
								    <input 
								    	type="text" 
								    	className="form-control" 
								    	id="exampleFormControlInput1" 
								    	name="fullname" 
								    	value={data.fullname} 
								    	onChange={InputEvent} 
								    	placeholder="Enter your Name"
								    	required
								    />
								  </div>
								  <div className="form-group mb-3">
								    <label for="exampleFormControlInput1">
								    	Phone
								    </label>
								    <input 
								    	type="number" 
								    	className="form-control" 
								    	id="exampleFormControlInput1" 
								    	name="phone" 
								    	value={data.phone} 
								    	onChange={InputEvent} 
								    	placeholder="Phone Number" 
								    	required
								    />
								  </div>
								  <div className="form-group mb-3">
								    <label for="exampleFormControlInput1">
								    	Email address
								    </label>
								    <input 
								    	type="email" 
								    	className="form-control" 
								    	id="exampleFormControlInput1" 
								    	name="email" 
								    	value={data.email} 
								    	onChange={InputEvent} 
								    	placeholder="name@example.com "
								    	required
								    />
								  </div>
								  <div className="form-group mb-3">
								    <label for="exampleFormControlTextarea1">
								    	Message
								    </label>
								    <textarea 
								    	className="form-control" 
								    	id="exampleFormControlTextarea1" 
								    	rows="3"
								    	name="msg" 
								    	value={data.msg} 
								    	onChange={InputEvent} 
								    	required
								    ></textarea>
								  </div>
								  <div className="col-12">
								  	<button className="btn btn-outline-primary" type="submit">Submit Form</button>
								  </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Contact;