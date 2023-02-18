import React, { Component } from "react";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify'
import config from '../../src/aws-exports'


Amplify.configure(config)
class Login extends Component {
  render() {
    return (
      
      <Authenticator>     
        
        {({signOut, user  }) => (
          <div>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"> Log out</button>
          </div>
        )}
      </Authenticator>

      // <section className="bg-gray-50 dark:bg-gray-900">
      //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      //     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      //           Welcome back
      //         </h1>
      //         <form className="space-y-4 md:space-y-6" action="#">
      //           <div>
      //             <label
      //               htmlFor="email"
      //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      //             >
      //               Your email
      //             </label>
      //             <input
      //               type="email"
      //               name="email"
      //               id="email"
      //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      //               placeholder="name@company.com"
      //               required
      //             ></input>
      //           </div>
      //           <div>
      //             <label
      //               htmlFor="password"
      //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      //             >
      //               Password
      //             </label>
      //             <input
      //               type="password"
      //               name="password"
      //               id="password"
      //               placeholder="••••••••"
      //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      //               required
      //             ></input>
      //           </div>
      //           <div className="flex items-center justify-between">
      //             <div className="flex items-start">
      //               <div className="flex items-center h-5">
      //                 <input
      //                   id="remember"
      //                   aria-describedby="remember"
      //                   type="checkbox"
      //                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
      //                   required
      //                 ></input>
      //               </div>
      //               <div className="ml-3 text-sm">
      //                 <label
      //                   htmlFor="remember"
      //                   className="text-gray-500 dark:text-gray-300"
      //                 >
      //                   Remember me
      //                 </label>
      //               </div>
      //             </div>
      //             <a
      //               href="#"
      //               className="text-gray-500 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
      //             >
      //               Forgot password?
      //             </a>
      //           </div>
      //           <button
      //             type="submit"
      //             className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      //           >
      //             Sign in
      //           </button>
      //           <div className="flex items-start">
      //             <button className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
      //               <svg
      //                 xmlns="http://www.w3.org/2000/svg"
      //                 xmlnsXlink="http://www.w3.org/1999/xlink"
      //                 aria-hidden="true"
      //                 role="img"
      //                 className="w-5"
      //                 preserveAspectRatio="xMidYMid meet"
      //                 viewBox="0 0 24 24"
      //               >
      //                 <g fill="none">
      //                   <path
      //                     fillRule="evenodd"
      //                     clipRule="evenodd"
      //                     d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
      //                     fill="currentColor"
      //                   />
      //                 </g>
      //               </svg>
      //               Google
      //             </button>
      //             <button className="bg-blue-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
      //               <svg
      //                 xmlns="http://www.w3.org/2000/svg"
      //                 viewBox="0 0 24 24"
      //                 width="24"
      //                 height="24"
      //               >
      //                 <path
      //                   fill="currentColor"
      //                   d="M21.6 0H2.4C1.1 0 0 1.1 0 2.4v19.2C0 22.9 1.1 24 2.4 24h9.7v-9.3H8v-3.6h4.1V8.8c0-4.1 2.5-6.3 6.1-6.3c1.7 0 3.2.1 3.6.2v4.2l-2.5.1c-1.9 0-2.3.9-2.3 2.2v2.9h4.6l-.6 3.6h-4V24h8.2c1.3 0 2.4-1.1 2.4-2.4V2.4c0-1.3-1.1-2.4-2.4-2.4z"
      //                 />
      //               </svg>
      //               Facebook
      //             </button>
      //           </div>

      //           <p className="text-sm font-light text-gray-500 dark:text-gray-400">
      //             Don't have an account?{" "}
      //             <a
      //               href="./signup"
      //               className="font-medium text-primary-600 hover:underline dark:text-primary-500"
      //             >
      //               Signup
      //             </a>
      //           </p>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}


export default withAuthenticator(Login,{
  socialProviders : ['google', 'facebook', 'amazon']
});