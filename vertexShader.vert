#version 330 core

in vec3 position;  // Input attribute

void main() {
    gl_Position = vec4(position, 1.0);
}
