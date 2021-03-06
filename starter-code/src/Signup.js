import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class Signup extends Component {
  render() {
    return (
    <div>
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password"  />
      
      <CoolButton name1="Submit" class1="is-rounded" class2="my-class" class3="is-danger" class4="is-small"/>
     

    
    </div>

    );
  }
}
export default Signup;