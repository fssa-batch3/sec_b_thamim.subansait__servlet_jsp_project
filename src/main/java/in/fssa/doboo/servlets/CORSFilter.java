package in.fssa.doboo.servlets;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletResponse;
/**
 * Servlet Filter implementation class CORSFilter
 */
@WebFilter("/*")
public class CORSFilter extends HttpFilter implements Filter {
	/**
	 * @see HttpFilter#HttpFilter()
	 */
	public CORSFilter() {
		super();
	}
	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse res = (HttpServletResponse) response;
		res.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your allowed origin(s)
		res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
		res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//		res.setContentType("application/json");
		chain.doFilter(request, response);
	}
}
