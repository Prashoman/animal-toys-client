const Shipping = () => {
  return (
    <div className="px-4 lg:px-28  py-8 mb-8">
      <div className="lg:flex  justify-between items-center">
        <div className="space-y-2">
          <img
            className="w-20 h-14"
            src="https://t4.ftcdn.net/jpg/03/72/57/59/360_F_372575910_pWoG31HF0x1m2EZvm54INJ0JkA4wZUUE.jpg"
            alt=""
          />
          <h1 className="text-xl font-bold">Free Shipping</h1>
          <p>On Order $23-7 Day a week</p>
        </div>
        <div className="space-y-2">
          <img
            className="w-20 h-14"
            src="https://icon-library.com/images/return-icon-png/return-icon-png-19.jpg"
            alt=""
          />
          <h1 className="text-xl font-bold">Free Returns</h1>
          <p>Free 90 days Returns policy</p>
        </div>
        <div className="space-y-2">
          <img
            className="w-20 h-14"
            src="https://w7.pngwing.com/pngs/180/542/png-transparent-call-centre-computer-icons-customer-service-callcenteragent-icon-design-others-face-telephone-call-smiley.png"
            alt=""
          />
          <h1 className="text-xl font-bold">24 hours Services</h1>
          <p>Call us 018***********.</p>
        </div>
        <div className="space-y-2">
          <img
            className="w-20 h-14"
            src="https://i.ibb.co/rv1mj6h/download-2.png"
            alt=""
          />
          <h1 className="text-xl font-bold">Mony Back Guarantee</h1>
          <p>Send with in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
