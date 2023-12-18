
exports.Authentication = (req, res) => {
    if (req.isAuthenticated()) {
        res.json({
            status: "success",
            body: req.user
        })
    }
    else {
        res.json({
            status: "failed",
        })
    }
}

exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            console.error('Error during logout:', err);
            return res.status(500).json({ error: 'Logout failed' });
        }

        return res.status(200).json({ message: 'Logout successful' });
    });
}