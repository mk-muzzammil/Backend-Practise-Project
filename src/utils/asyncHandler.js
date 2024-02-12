// const asyncHandler = ()=>{}

// async handler funtion wrapper which can be used anywhere in the code to execute the async function and catch the error and handle it firslt i will write function using try catch and then i will write the same function for promises way:

// const asyncHandler = (fn) =>{};
// const asyncHandler = (fn) => ()=>{};
// const asyncHandler = (fn) => {(req,res,next)=>{}};

const asynchandler = (requestHanlder) => {
  async (req, res, next) => {
    try {
      await requestHanlder(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({ succes: false, message: error.message || "Internal Server Error" });
    }
  };
};

// ====================second way by promisses=====================
// const asyncHanlder = (requestHandler) => {
//   (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((error) => {
//       next(error);
//     });
//   };
// };

//both ways can be used

export default asyncHandler;
