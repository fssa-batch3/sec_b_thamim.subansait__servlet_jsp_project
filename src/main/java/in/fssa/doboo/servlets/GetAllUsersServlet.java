package in.fssa.doboo.servlets;


import java.io.IOException;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import in.fssa.doboo.exception.ServiceException;

import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

//import in.fssa.partice_dwp.model.ResponseEntity;

/**
 * Servlet implementation class UserCreateServlets
 */
@WebServlet("/users")
public class GetAllUsersServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UserService userService = new UserService();
		Set<UserEntity> users = null;
		try {
			users = userService.getAllUsers();
			ResponseEntity res = new ResponseEntity();
			res.setStatus(200);
			res.setData(users);
			res.setMessage("user details fetched successfully");
//		
			Gson gson = new Gson();
			String responseJson = gson.toJson(res);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);
		} catch (ServiceException e) {
			e.printStackTrace();
		}
//		RequestDispatcher rd = request.getRequestDispatcher("get_all_user.jsp");
//		rd.forward(request, response);
	}
//
//	/**
//	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
//	 */
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
//	}

}
