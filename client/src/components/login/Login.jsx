import { Link } from "react-router";
import PrimaryBtn from "../common/buttons/PrimaryBtn";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center bg-white py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-gradient-to-t from-white to-pink-100 px-4 py-8 shadow-lg sm:rounded-lg sm:px-10">
            {/* <!-- Header --> */}
            <div className={styles["header"]}>
              <h2>Login</h2>
            </div>

            {/* <!-- Form --> */}
            <form className="space-y-7">
              {/* <!-- Email --> */}
              <div className={styles["filed"]}>
                <input type="email" id="email" required />
                <label htmlFor="email">Email Address</label>
              </div>

              {/* <!-- Password --> */}
              <div className={styles["filed"]}>
                <input type="password" id="password" required />
                <label htmlFor="password">Password</label>
              </div>

              <PrimaryBtn>Login</PrimaryBtn>
            </form>

            <div className={styles["link-container"]}>
              <p>Don't have an account?</p>
              <Link to="/sign-up" className={styles["link-to-register"]}>
                Sign up &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
