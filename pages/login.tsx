import React, { Component } from "react";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "../src/aws-exports";

Amplify.configure(config);
class Login extends Component {
  render() {
    return (
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            {user ? <h1>Hello {user.username || user.attributes?.name}</h1> : <h1>Hello Guest</h1>}
            <button
              onClick={signOut}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              {" "}
              Log out
            </button>
          </div>
        )}
      </Authenticator>
    );
  }
}

export default withAuthenticator(Login, {
  socialProviders: ["google", "facebook", "amazon"],
});
