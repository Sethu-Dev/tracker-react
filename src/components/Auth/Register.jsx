import React, { useState } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [fullname, setFullName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullname,
      employeeId,
      email,
      password,
      dateOfBirth
    };
    axios.post("http://localhost:3005/register", userData)
      .then((result) => {
        Navigate("/login");
        console.log("Registration Successful:", result.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleDateChange = date => {
    setSelectedDate(date);
  }

  return (
    <div className='h-full'><div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center justify-between">
              <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input id="name" name="name" type="name" autocomplete="off" required value={fullname} onChange={(e) => setFullName(e.target.value)} className="flex block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label for="Employee Id" className="block text-sm font-medium leading-6 text-gray-900">Employee Id</label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input id="Employee Id" name="Employee Id" type="text" autocomplete="off" required value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} className="flex block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <div className="flex items-center justify-between">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div className="text-sm"></div>
            </div>

            <div class="mt-2.5">
              <input type="email" name="email" id="email" autocomplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>


          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <label for="DateOfBirth" className="block text-sm font-medium leading-6 text-gray-900">Date Of Birth</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setdateOfBirth(date)} // Directly use the date value
              dateFormat="dd/MM/yyyy" // Customize date format as needed
              placeholderText='06 / 01 / 2000'
              className="w-full h-[38px] text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have account ?
          <a href="login" className="font-semibold leading-6 text-orange-600 hover:text-orange-500"> Login</a>
        </p>
      </div>
    </div></div>
  )
}

export default Register