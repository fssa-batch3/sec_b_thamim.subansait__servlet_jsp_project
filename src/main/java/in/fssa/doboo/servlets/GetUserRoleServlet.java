package in.fssa.doboo.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import in.fssa.doboo.model.ResponseEntity;

/**
 * Servlet implementation class GetUserRoleServlet
 */
@WebServlet("/user/role")
public class GetUserRoleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your allowed origin(s)
	     response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	     response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	     
		HttpSession session = request.getSession();
		String role = (String) session.getAttribute("role");
		System.out.println(role);
		ResponseEntity res = new ResponseEntity();
		res.setStatus(200);
		res.setData(role);
		res.setMessage("user role is fetched successfully");
//	
		Gson gson = new Gson();
		String responseJson = gson.toJson(res);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(responseJson);
		
	}
}
