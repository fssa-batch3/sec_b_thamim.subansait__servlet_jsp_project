package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.exception.ServiceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class UpdateUserServlet
 */
@WebServlet("/user/update")
public class UpdateUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request,response);
	}
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your allowed origin(s)
	    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	     
		UserEntity user = new UserEntity();
		
		try {
		
		if(request.getParameter("name") == null || request.getParameter("name").isEmpty()) {
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println("Name cannot be null or empty");
		} else {
			user.setName(request.getParameter("name"));
		}
		
//		if(request.getParameter("artistName") == null || request.getParameter("artistName").isEmpty()) {
//			PrintWriter consoleOutput = new PrintWriter(System.out);
//			consoleOutput.println("artistName cannot be null or empty");
//		} else {
//			user.setArtistName(request.getParameter("artistName"));
//		}		
		HttpSession session = request.getSession();
		
		user.setEmail(request.getParameter("email"));
		
		user.setDob((String)session.getAttribute("userDob"));
		
		UserService userService = new UserService();
		
		String userId =  String.valueOf(session.getAttribute("userId"));
		System.out.println(userId+"user id");
//		String idParams = request.getParameter("userid");
		
		int id = Integer.parseInt(userId);
		
		userService.updateUser(id, user);
		
		ResponseEntity res = new ResponseEntity();
		res.setStatus(200);
		res.setData("success");
		res.setMessage("user details is updated successfully");
//	
		Gson gson = new Gson();
		String responseJson = gson.toJson(res);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(responseJson);
		
//		response.sendRedirect("profile");
		
		} catch (ValidationException e) {
			e.printStackTrace();
			
//			 request.setAttribute("errorMessage", "An error occurred: " + e.getMessage());
//			 RequestDispatcher dispatcher = request.getRequestDispatcher("/error");
//			 dispatcher.forward(request, response);
			
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST); // this is for the status code 400 for bad request.
	        response.getWriter().write(e.getMessage());
			
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println(e.getMessage());
			
		} catch (ServiceException e) {
			e.printStackTrace();
//			request.setAttribute("errorMessage", "An error occurred: " + e.getMessage());
//			 RequestDispatcher dispatcher = request.getRequestDispatcher("//error");
//			 dispatcher.forward(request, response);
			 response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); // this is for the status code 500 internal error.
		     response.getWriter().write(e.getMessage());
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println(e.getMessage());
		}


}
}
