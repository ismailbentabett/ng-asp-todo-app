using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly DataContext _context;

        public TodoController(DataContext context)
        {
            _context = context;
        }

        //crud 
        [HttpGet]
        public IActionResult GetTodos()
        {
            var todos = _context.Todos;
            return Ok(todos);
        }

        [HttpGet("{id}")]
        public IActionResult GetTodo(int id)
        {
            var todo = _context.Todos.Find(id);
            return Ok(todo);
        }


        [HttpPost]
        public IActionResult AddTodo([FromBody] Todo todo)
        {
            _context.Todos.Add(todo);
            _context.SaveChanges();
            return Ok(todo);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTodo(int id, [FromBody] Todo todo)
        {
            var todoFromDb = _context.Todos.Find(id);
            todoFromDb.Title = todo.Title;  
            todoFromDb.Description = todo.Description;
            todoFromDb.IsCompleted = todo.IsCompleted;
            _context.SaveChanges();
            return Ok(todoFromDb);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTodo(int id)
        {
            var todoFromDb = _context.Todos.Find(id);
            _context.Todos.Remove(todoFromDb);
            _context.SaveChanges();
            return Ok();
        }


    }
}
