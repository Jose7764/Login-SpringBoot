package com.exemplo.loginapp.controller;

import com.exemplo.loginapp.model.Usuario;
import com.exemplo.loginapp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repo;

    @PostMapping("/cadastrar")
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        return repo.save(usuario);  
    }

    @PostMapping("/login")
    public String login(@RequestBody Usuario usuario) {
        Usuario user = repo.findByEmail(usuario.getEmail());
        if (user != null && user.getSenha().equals(usuario.getSenha())) {
            return "Login bem-sucedido!";
        } else {
            return "Email ou senha inválidos.";
        }
    }
}
