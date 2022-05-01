// import React from 'react'
// import { Button, Form} from 'semantic-ui-react'
// import{useMutation} from '@apollo/react-hooks'
// import gql from 'graphql-tag'
// function Register(){
//     const[values,setValues]=useState({
//         username:'',
//         email:'',
//         password:'',
//         confirmpassword:''
//     })

//     const onChange=(event)=>{
//         setValues({...values,[event.target.name]:event.target.value});
//     }
//     const onSubmit=(event)=>{
//         event.preventDefault();

//     }

//     const [addUser,{ loading }]=useMutation(REGISTER_USER,{
//         update(proxy,result){

//         },variables:values
//     });

//     return(
//         <div>
//             <Form onSubmit={onSubmit} noVlidate>
//                 <h1>Register</h1>
//                 <Form.Input
//                     label="Username"
//                     placeholder="Username.."
//                     name="username"
//                     value={values.username}
//                     onChange={onChange}
//                     />
//                 <Form.Input
//                     label="Email"
//                     placeholder="Email.."
//                     name="email"
//                     value={values.email}
//                     onChange={onChange}
//                     />
//                 <Form.Input
//                     label="Confirm Password"
//                     placeholder="Confirm Password.."
//                     name="confirmpassword"
//                     value={values.confirmpassword}
//                     onChange={onChange}
//                     />
//                 <Form.Input
//                     label="userName"
//                     placeholder="Username.."
//                     name="username"
//                     value={values.username}
//                     onChange={onChange}
//                     />
//                 <Button type="submit" primary> Register</Button>
//             </Form>
//         </div>
//     )
// }

// const REGISTER_USER=gql`
// mutation register(
//     $username: String!
//     $email: String!
//     $password: String!
//     $confirmpassword: String!
// ){
//     register(
//         registerInput:{
//             username: $username
//             email: $email
//             password: $password
//             confirmpassword: $confirmpassword
//         }
//     )
// }
// export default Register;