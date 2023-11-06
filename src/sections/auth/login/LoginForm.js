import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useUserContext } from '../../../context/UserContext';
// components
import Iconify from '../../../components/iconify';
import { login } from '../../../api/user';

export default function LoginForm() {
    const navigate = useNavigate();

    const { setUser } = useUserContext();

    const [showPassword, setShowPassword] = useState(false);
    const [account, setAccount] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [accountCorrection, setAccountCorrection] = useState(null);

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        const logger = {
            username,
            password,
        };

        if (!username) {
            setUsernameError('Username is empty');
            return;
        }

        if (!password) {
            setPasswordError('Password is empty');
            return;
        }

        const { data: tokenResponse } = await login(logger);

        if (tokenResponse.data.token) {
            const { data: userListResponse } = await axios.get(
                'https://mocki.io/v1/5086a0ab-a71b-41d5-b02f-333f3f20f09a',
            );
            const result = userListResponse.data.find(
                (obj) => obj.username === jwtDecode(tokenResponse.data.token).sub,
            );
            localStorage.setItem('token', JSON.stringify(tokenResponse.data.token));
            console.log(result);
            setAccount(result);
        }

        if (username && password) {
            if (account) {
                setUser(account);
                navigate('/dashboard', { replace: true });
                setUsernameError(null);
                setPasswordError(null);
            } else {
                setAccountCorrection('This account does not exist');
            }
        }
    };

    return (
        <>
            <Stack spacing={3}>
                {accountCorrection && <Alert severity="error">{accountCorrection}</Alert>}
                <TextField
                    error={usernameError}
                    name="username"
                    label={usernameError || 'Username'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    error={passwordError}
                    name="password"
                    label={passwordError || 'Password'}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <div>
                    <></>
                </div>
                <Link variant="subtitle2" underline="hover">
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleSubmitLogin}>
                Login
            </LoadingButton>
        </>
    );
}
