const UserModel = require("../model/user");

class FrontController {
  static home = async (req, res) => {
    try {
      res.render("home");
    } catch (error) {
      console.log(error);
    }
  };
  static about = async (req, res) => {
    try {
      res.render("about");
    } catch (error) {
      console.log(error);
    }
  };
  static contact = async (req, res) => {
    try {
      res.render("contact",{msg:req.flash('success') , msg1:req.flash('error')});
    } catch (error) {
      console.log(error);
    }
  };
  static ContactInsert = async (req, res)=>{
    try {
        // console.log(req.body);
        const {message}= req.body
        if(!message){
            req.flash('error', 'Bhrr too de pehle khuch!')
            return res.redirect('/contact')
        }
        const mess = await UserModel.create({
            message
        });
        req.flash('success', 'Jao Ab Sone msg chla gya h!')
        res.redirect('/contact')
        
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = FrontController;
