import React, { useState, ChangeEvent, FormEvent } from 'react';
import Wrapper from '../Assets/Wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components';
import { useAppContext, AppContextProps } from '../context/AppContext';

interface State {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
}

const initialState: State = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register: React.FC = () => {
  const [values, setValues] = useState<State>(initialState);

  const appContext: AppContextProps | undefined = useAppContext();
  const showAlert = appContext?.state.showAlert;
  const isLoading = appContext?.state.isLoading;
  const displayAlert = appContext?.displayAlert; // Update this line

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {name, email, password, isMember}=values
    if(!email || !password || (!isMember && name)){
      displayAlert?.(); 
      return;
    }

    console.log(values);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <div className="findLogo">
          <Logo />
        </div>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            name="name"
            type="text"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
