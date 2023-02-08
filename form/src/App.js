import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react' ;


function App() {

  const[first_name,setFirstName] = React.useState('');
  const[last_name,setLastName] = React.useState('');
  const[email,setEmail] = React.useState('');
  const[password,setPassword] = React.useState('');
  const[error,setError]=useState(false)

     const handleSubmit = (event) => {
      console.log(`  
      First Name : ${first_name}
      Last Name : ${last_name}
      email : ${email}
      password : ${password}

      `)
      event.preventDefault()
      if(first_name.length==0||last_name.length==0||email.length==0||password.length==0){
        setError(true)
      }

  }



  return (
    <div className="container" style={{width:500 } }>
      <form onSubmit={handleSubmit}>
<div className="row">
  <div className="col-md-12 text-center " >
    <h1>Login</h1>
  </div>
</div>

<div className="row" >
  <div className="col-md-5">First Name</div>
  <div className="col-md-6"><input className="form-control" type="text" name="first name" 
   onChange={e=>setFirstName(e.target.value)}></input></div>
   {error&&first_name.length<=0?
   <label className='a'>Ekteb haja ya Broo</label>:""}
</div>

<div className="row">
  <div className="col-md-5">Last Name</div>
  <div className="col-md-6"><input className="form-control" type="text" name="Last name"  
  onChange={e=>setLastName(e.target.value)}
  ></input></div>
  {error&&last_name.length<=0?
  <label className='a'>Ekteb haja ya Broo</label>:""}
</div>

<div className="row">
  <div className="col-md-5">Email</div>
  <div className="col-md-6"><input className="form-control" type="email" name="Email"
  onChange={e=>setEmail(e.target.value)}
  ></input></div>
  {error&&email.length<=0?
  <label className='a'>Ekteb haja ya Broo</label>:""}
</div>

<div className="row">
  <div className="col-md-5">Password</div>
  <div className="col-md-6"><input className="form-control" type="password" name="PassWord" 
  onChange={e=>setPassword(e.target.value)}
  ></input></div>
  {error&&password.length<=0?
  <label className='a'>Ekteb haja ya Broo</label>:""}
</div>

<div className="row">
  <div className="col-md-12"><button type="submit" className="btn btn-warning">Marhbe</button></div>
</div>

</form>

    </div>
  );
}

export default App;
