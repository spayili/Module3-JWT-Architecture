// Student Name: Sharath Payili
// ASU ID: 1225905683
// Date: 03/24/2024

function loggerMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Move to the next middleware or route handler
  }
  
export default loggerMiddleware;