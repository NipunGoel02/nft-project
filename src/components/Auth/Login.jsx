import { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    try {
      await signup(email, password, username);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  }

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
    setError('');
  };

  return (
    <div className={`${styles.container} ${isSignUpMode ? styles['sign-up-mode'] : ''}`}>
      <div className={styles['forms-container']}>
        <div className={styles['signin-signup']}>
          <form onSubmit={handleLogin} className={styles['sign-in-form']}>
            <h2 className={styles.title}>Sign in</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className={styles['input-field']}>
              <i className="fas fa-user"></i>
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className={styles['input-field']}>
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className={styles.btn}>Login</button>
            <p className={styles['social-text']}>Or Sign in with social platforms</p>
            <div className={styles['social-media']}>
              <a href="#" className={styles['social-icon']}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form onSubmit={handleSignup} className={styles['sign-up-form']}>
            <h2 className={styles.title}>Sign up</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className={styles['input-field']}>
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>
            <div className={styles['input-field']}>
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className={styles['input-field']}>
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className={styles.btn}>Sign up</button>
            <p className={styles['social-text']}>Or Sign up with social platforms</p>
            <div className={styles['social-media']}>
              <a href="#" className={styles['social-icon']}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className={styles['social-icon']}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className={styles['panels-container']}>
        <div className={`${styles.panel} ${styles['left-panel']}`}>
          <div className={styles.content}>
            <h3>New here?</h3>
          <p>Sign up now to create, verify, and manage blockchain certificates</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={toggleMode}>
              Sign up
            </button>
            <img className={styles.hello} src="/Screeshot 2024-09-14 183525.png" alt="" />
          </div>
        </div>
        <div className={`${styles.panel} ${styles['right-panel']}`}>
          <div className={styles.content}>
            <h3>Already a member</h3>
            <p>Welcome back to CertiChain! Ready to manage your blockchain certificates?</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={toggleMode}>
              Sign in
            </button>
          </div>
          <img src="" className={styles.image} alt="" />
        </div>
      </div>
    </div>
  );
}
