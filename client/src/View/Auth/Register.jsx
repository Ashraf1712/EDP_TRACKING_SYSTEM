import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useRegister } from "../../hooks/useRegister"
import Staff from '../../Model/Staff';
import Department from '../../Model/Department';
import Category from '../../Model/Category';
import Section from '../../Model/Section';


export default function Register() {
  const [staff, setStaff] = useState(new Staff());
  const [department, setDepartment] = useState(new Department());
  const [category, setCategory] = useState(new Category());
  const [section, setSection] = useState(new Section());

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const { register, error, isLoading } = useRegister()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordsMatch) {
      await register(new
        Staff(
          staff.staffID,
          staff.staffEmail,
          staff.staffPassword,
          staff.staffName,
          department.departmentID,
          category.categoryID,
          section.sectionID,
        ));

    }
  }
  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setStaff({ ...staff, ["staffPassword"]: passwordValue });
  };
  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordsMatch(password === confirmPasswordValue);
  };


  return (
    <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-10">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white ">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"></img>
          Employee Development Plan Tracker
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="staffID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Staff ID</label>
                <input type="text" name="staffID" id="staffID" onChange={(e) => setStaff({ ...staff, [e.target.name]: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="11223344" required="">
                </input></div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="staffEmail" id="email" onChange={(e) => setStaff({ ...staff, [e.target.name]: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                </input></div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" onChange={(e) => handlePassword(e)} value={password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                </input></div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" name="confirm_password" id="confirm-password" placeholder="••••••••" onChange={(e) => handleConfirmPasswordChange(e)} value={confirmPassword}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                </input></div>
              <div>
                <label htmlFor="staffName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="text" name="staffName" id="staffName" onChange={(e) => setStaff({ ...staff, [e.target.name]: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jane Doe" required="">
                </input></div>
              <div>
                <label htmlFor="departmentID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Department</label>
                <select name="departmentID" id="departmentID" onChange={(e) => setDepartment({ ...department, [e.target.name]: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  <option value="">Select Department</option>
                  <option value="1">Production Plant 1</option>
                  <option value="2">Production Plant 2</option>
                  <option value="3">Maintenance</option>
                  <option value="4">Human Resource Management</option>
                </select>
              </div>
              <div>
                <label htmlFor="categoryID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Category</label>
                <select name="categoryID" id="categoryID" onChange={(e) => setCategory({ ...category, [e.target.name]: e.target.value })} value={category.categoryID}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  <option value="">Select Category</option>
                  <option value="1">Executive</option>
                  <option value="2">Non-Executive</option>
                  <option value="3">Manager</option>
                </select>
              </div>
              <div>
                <label htmlFor="sectionID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Section</label>
                <select name="sectionID" id="sectionID" onChange={(e) => setSection({ ...section, [e.target.name]: e.target.value })} value={section.sectionID}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  <option value="">Select Option</option>
                  <option value="1">Software Engineer</option>
                  <option value="2">Production Engineer</option>
                  <option value="3">Improvement Engineer</option>
                </select>
              </div>


              {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
              <button type="submit" disabled={!passwordsMatch || !password || !confirmPassword}
                className={`w-full text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}>Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div >
    </section >
  )
}
