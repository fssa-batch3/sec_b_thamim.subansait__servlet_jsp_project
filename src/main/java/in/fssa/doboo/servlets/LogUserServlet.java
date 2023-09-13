package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class LogUserServlet
 */
@WebServlet("/user/log")
public class LogUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	   @Override
	   protected void doPost(HttpServletRequest request, HttpServletResponse response)  throws ServletException, IOException {
		   response.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your allowed origin(s)
		     response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
		     response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	        PrintWriter out=response.getWriter();  
	             
	        String email=request.getParameter("email");  
	        String password=request.getParameter("password"); 
//	        System.out.println(email+"   "+password);
	        
	        UserService userService = new UserService();
	        UserEntity user = new UserEntity();
	        try {
	        	
	        	user = userService.Login(email);
	        	String pwsd = user.getPassword();
				if(!pwsd.equals(password)) {
					throw new ValidationException("password deosn't match sorry");
				}
				
//				HttpSession session = request.getSession();
//				session.setAttribute("userId", user.getId());
				
//			Cookie ck = new Cookie("userid",String.valueOf(user.getId()));  
//			ck.setPath("/");
//			System.out.println(ck.getName()+" "+ck.getValue());
//	        response.addCookie(ck);
	     // response.sendRedirect("dashboard");
	          
	          ResponseEntity res = new ResponseEntity();
				res.setStatus(200);
				res.setData(user);
				res.setMessage("user is successfully logged in");
//			
				Gson gson = new Gson();
				String responseJson = gson.toJson(res);
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				response.getWriter().write(responseJson);
				
			} catch (PersistanceException | ValidationException | RuntimeException e) {
				ResponseEntity res = new ResponseEntity();
				res.setStatus(500);
				res.setData("failed");
				res.setMessage(e.getMessage());
//			
				Gson gson = new Gson();
				String responseJson = gson.toJson(res);
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				response.getWriter().write(responseJson);
//				 request.setAttribute("errorMessage", "An error occurred: " + e.getMessage());
//				 RequestDispatcher dispatcher = request.getRequestDispatcher("/error");
//			     dispatcher.forward(request, response);
				e.printStackTrace();
				out.println(e.getMessage());
			}
	    }
}
