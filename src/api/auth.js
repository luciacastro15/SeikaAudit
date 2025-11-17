const API_URL = import.meta.env.VITE_API_URL;

export async function login_user(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let data = null;
    try {
        data = await response.json();
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
    console.log('Response data:', data);

    if (!response.ok) {
        const errorMessage = data && data.message ? data.message : 'Login failed';
        throw new Error(errorMessage);
    }
    return data;
}

export async function register_user({nombre, email, password, rol_id}) {
    const response = await fetch(`${API_URL}/auth/registro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ nombre, email, password, rol_id })
    });
    if (!response.ok) {
        throw new Error('Registration failed');
    }
    return await response.json();
}