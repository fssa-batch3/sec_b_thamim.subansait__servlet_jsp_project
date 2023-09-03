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

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class LogUserServlet
 */
@WebServlet("/user/log")
public class LogUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	   @Override
	   protected void doGet(HttpServletRequest request, HttpServletResponse response)  throws ServletException, IOException {  
	        PrintWriter out=response.getWriter();  
	             
	        String email=request.getParameter("email");  
	        String password=request.getParameter("password"); 
	        
	        UserService userService = new UserService();
	        UserEntity user = new UserEntity();
	        try {
	        	
	        	user = userService.Login(email);
	        	String pwsd = user.getPassword();
				if(!pwsd.equals(password)) {
					throw new ValidationException("password deosn't match sorry");
				}
			Cookie ck=new Cookie("userid",String.valueOf(user.getId()));  
	          response.addCookie(ck);  
	          response.sendRedirect("dashboard"); 
				
			} catch (PersistanceException | ValidationException | RuntimeException e) {

				e.printStackTrace();
				out.println(e.getMessage());
			}
	    }
}
