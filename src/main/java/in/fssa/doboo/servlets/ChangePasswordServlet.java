package in.fssa.doboo.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;

import com.google.gson.Gson;

import in.fssa.doboo.exception.PersistanceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class ChangePasswordServlet
 */
@WebServlet("/change/password")
public class ChangePasswordServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       /**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 UserService userService = new UserService();
		  UserEntity user = new UserEntity();
		  try {
			  HttpSession session = request.getSession(false);
			  Integer userId = (Integer) session.getAttribute("userId");
			  user = userService.findByUserId(userId);
	        	
			  String oldPassword = request.getParameter("oldPassword");
			  String newPassword = request.getParameter("newPassword");
	        	
				if(!BCrypt.checkpw(oldPassword, user.getPassword())) {
					throw new ValidationException("Incorrect old Password");
				}
				userService.updatepassword(userId, newPassword);
		          
	          ResponseEntity res = new ResponseEntity();
				res.setStatus(200);
				res.setData(user);
				res.setMessage("password is successfully updateded");
		
				Gson gson = new Gson();
				String responseJson = gson.toJson(res);
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				response.getWriter().write(responseJson);
				
				}catch (ValidationException | RuntimeException  e) {
					e.printStackTrace();
					String errorMessage = e.getMessage();
					response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
					response.setContentType("application/json");
					response.setCharacterEncoding("UTF-8");
					response.getWriter().write(errorMessage);
				}
	}

}
