const LOGOUT = async (req, res) => {
    try {
        res.clearCookie("jwt")
        res.json({
            message: "LOGOUT SUCCESS",
            data: [],
            error: false,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "An error occurred during LOGOUT",
            LOGOUT: false,
        });
    }
}
module.exports = LOGOUT;