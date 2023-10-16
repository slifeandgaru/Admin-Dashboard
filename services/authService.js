const Account = require("../models/account");

exports.checkAccountAndPassword = async (req, res) => {
    try {
        const account = await Account.findOne({ account: req.body.account });
        if (!account) return { error: 'Tài khoản không chính xác' };

        const check = await account.verifyPassword(req.body.password);
        if (!check) return { error: 'sai mật khẩu' };

        const checkRole = await account.verifyRole(req.body.role);
        if (!checkRole) return { error: 'tài khoản hoặc mật khẩu không chính xác' };

        // const cart = await Cart.findOne({userId: user._id});
        // user._doc.cart = cart;
        return { account }
    } catch (error) {
        return { error };
    }
}