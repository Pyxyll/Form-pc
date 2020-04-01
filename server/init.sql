CREATE TABLE gpus(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    designer VARCHAR(255) NOT NULL,
    manufacturer VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    length INTEGER NOT NULL,
    memory_type VARCHAR(255) NOT NULL,
    cuda_cores INTEGER,
    stream_processors INTEGER
    vram INTEGER NOT NULL,
    tdp INTEGER NOT NULL,
    fans INTEGER,
    base_frequency INTEGER NOT NULL,
    boost_frequency INTEGER NOT NULL,
    hdmi_ports INTEGER NOT NULL,
    display_ports INTEGER NOT NULL,
    vga_ports INTEGER NOT NULL,
    dvi_ports INTEGER NOT NULL
);

INSERT INTO gpus (name, designer, manufacturer, type, length, memory_type, cuda_cores, stream_processors, vram, tdp, fans, base_frequency, boost_frequency, hdmi_ports, display_ports, vga_ports, dvi_ports);