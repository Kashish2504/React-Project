export const AuthContext=createContext()

const AuthProvider=({children})=>{

    return(
        <div>
            <AuthContext.Provider value={Kashish}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider