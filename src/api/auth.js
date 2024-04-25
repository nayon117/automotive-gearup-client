import axiosPublic from ".";

// save user information to database
export const saveUser = async (user) => {
    const currentUser = {
        name:user?.displayName,
        email: user?.email,
        role: 'user',
        image:user?.photoURL
        
    }
    const { data } = await axiosPublic.put(`/users/${user?.email}`,currentUser)
    return data;
}


// get user role
export const getRole = async (email) => {
    const { data } = await axiosPublic(`/user/${email}`)
    return data?.role ;
}

// get all  users
export const getAllUsers = async () => {
    const { data } = await axiosPublic('/users')
    return data ;
}

// update user role
export const updateRole = async ({email,role}) => {
    const currentUser = {
         email,role
    }
    const { data } = await axiosPublic.put(`/users/update/${email}`,currentUser)
    return data;
}