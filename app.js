var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var deleteMultipleUsers = require('./routes/deleteMultipleUsers');
var category=require('./routes/category_routes');
var login=require('./routes/login_routes');
var user=require('./routes/user_routes');
var signup=require('./routes/signup_routes');
var product=require('./routes/product_routes');
var brand=require('./routes/brand_routes');
var deleteMultipleProduct=require('./routes/deleteMultipleProducts_routes');
var updateWithImage=require('./routes/updateProductWithImage_routes');
var wholsaller=require('./routes/getwholsaller');
var retailer=require('./routes/getretailer');
var tempproduct=require('./routes/temp_product_routes');
var getproductnameorbrand=require('./routes/getProductNameOrBrand');
var gettempproductnameorbrand=require('./routes/getTempProductNameorBrand');
var bill=require('./routes/bill_routes');
var billdetails=require('./routes/bill_details_routes');
var billdetailsbyid=require('./routes/getBillDeatils_routes');
var getconisionofwhol=require('./routes/getcomissonofwhol');
var wholesalerSide=require('./routes/wholesalerSide_routes');
var wholupdateimage=require('./routes/wholesalerimageupdate_routes');
var sizepro=require('./routes/product_size_routes');
var colorpro=require('./routes/product_color_routes');
var pricepro=require('./routes/product_price_routes');
var cart=require('./routes/cart_routes');
var getsellerloc=require('./routes/getsallerfromlocation_routes');
var getshort=require('./routes/getshortkurti');
var getLongKurti=require('./routes/longkurti_routes');
var getAnarkaliKurti=require('./routes/Anarkalikurti_routes');
var deletecart=require('./routes/deletemultiplecarts');
var emailVerify=require('./routes/emailverify_routes');
var citypro=require('./routes/getproduct_city');
var wholsallingpro=require('./routes/wholsallingproduct');
var getprocat=require('./routes/getserchprobycat');
var getprobrand=require('./routes/getProByBrand');
var getretailerpastpro=require('./routes/retailerpastpro');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user',user);
app.use('/signup',signup);
app.use('/deleteMultipleUsers',deleteMultipleUsers);
app.use('/category',category);
app.use('/login',login);
app.use('/product',product);
app.use('/brand',brand);
app.use('/deletemultiplepro',deleteMultipleProduct);
app.use('/updateImage',updateWithImage);
app.use('/wholsaller',wholsaller);
app.use('/retailer',retailer);
app.use('/tempproduct',tempproduct);
app.use('/getproductnameorbrand',getproductnameorbrand);
app.use('/gettempproductnameorbrand',gettempproductnameorbrand);
app.use('/bill',bill);
app.use('/billdetails',billdetails);
app.use('/billdetailsbyid',billdetailsbyid);
app.use('/getcomofwhol',getconisionofwhol);
app.use('/wholesalerSide',wholesalerSide);
app.use('/wholupdateimage',wholupdateimage);
app.use('/sizepro',sizepro);
app.use('/colorpro',colorpro);
app.use('/pricepro',pricepro);
app.use('/cart',cart);
app.use('/getsellerloc',getsellerloc);
app.use('/getshortkurti',getshort);
app.use('/getlongkurti',getLongKurti);
app.use('/getanarkalikurti',getAnarkaliKurti);
app.use('/emailVerify',emailVerify);
app.use('/deletecart',deletecart);
app.use('/citypro',citypro);
app.use('/wholsallingpro',wholsallingpro);
app.use('/getprocat',getprocat);
app.use('/getprobrand',getprobrand);
app.use('/getretailerpastpro',getretailerpastpro);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error pag
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
