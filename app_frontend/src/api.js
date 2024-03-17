import axios from "axios";

export const loginUser = async (data) => {
    console.log('data: ', data);

    return new Promise((resolve, reject) => {
        try {
            //let result = axios.post('/api/user', data);
            
            // TODO: Update to API request
            let result = {
                status: "success",
                data: {
                    id: "1",
                    username: "username",
                    email: "email",
                    role: "role",
                },
                message: "User logged in successfully"
            }

            resolve(result.data);
        } catch (err) {
            console.log('error: ', err);
            reject(err);
        }
    });
}

export const getProfileByUserId = async ({userId}) => {
    return new Promise((resolve, reject) => {
        try {
            //let result = axios.get('/api/profile', userId);
            
            // TODO: Update to API request
            let result = {
                status: "success",
                data: {
                    id: "1",
                    username: "username",
                    email: "email",
                    role: "role",
                },
                message: "Successfully retrieved profile"
            }

            resolve(result.data);
        } catch (err) {
            console.log('error: ', err);
            reject(err);
        }
    });
}