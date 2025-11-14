import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { mockDB, type Voter } from "@/data/mockData";

const Home = () => {
  const navigate = useNavigate();
  const [dni, setDni] = useState("");
  const [loading, setLoading] = useState(false);

  // Generar datos simulados del votante basado en el DNI
  const generateMockVoterData = (dni: string): Voter => {
    const nombres = [
      "Juan", "María", "Carlos", "Ana", "Luis", "Carmen", "Pedro", "Rosa",
      "Miguel", "Patricia", "Fernando", "Sandra", "Roberto", "Elena", "Jorge", "Lucía"
    ];
    const apellidos = [
      "García", "Rodríguez", "López", "Martínez", "González", "Pérez", "Sánchez", "Ramírez",
      "Torres", "Flores", "Rivera", "Gómez", "Díaz", "Cruz", "Morales", "Ortiz"
    ];
    
    const nombre = nombres[parseInt(dni[0]) % nombres.length];
    const apellido1 = apellidos[parseInt(dni[1]) % apellidos.length];
    const apellido2 = apellidos[parseInt(dni[2]) % apellidos.length];
    
    const distritos = ["Miraflores", "San Isidro", "La Molina", "Surco", "Pueblo Libre", "Jesús María"];
    const provincias = ["Lima", "Callao", "Arequipa", "Cusco", "Trujillo", "Chiclayo"];
    const departamentos = ["Lima", "Callao", "Arequipa", "Cusco", "La Libertad", "Lambayeque"];
    
    const distrito = distritos[parseInt(dni[3]) % distritos.length];
    const provincia = provincias[parseInt(dni[4]) % provincias.length];
    const departamento = departamentos[parseInt(dni[5]) % departamentos.length];
    
    return {
      dni,
      full_name: `${nombre} ${apellido1} ${apellido2}`,
      address: `Av. Principal ${parseInt(dni.slice(0, 3))} - ${distrito}`,
      district: distrito,
      province: provincia,
      department: departamento,
      birth_date: `19${dni.slice(4, 6)}-${String(parseInt(dni[6]) + 1).padStart(2, '0')}-${String(parseInt(dni[7]) + 1).padStart(2, '0')}`,
      photo_url: `https://i.pravatar.cc/150?img=${parseInt(dni.slice(0, 2)) % 70}`,
      has_voted: false
    };
  };

  const handleDniSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (dni.length !== 8) {
      toast.error("El DNI debe tener 8 dígitos");
      return;
    }

    setLoading(true);
    try {
      // Simular consulta de DNI
      toast.info("Verificando datos...");
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 800));

      // Verificar si el votante ya existe en la base de datos simulada
      let voterData = mockDB.getVoter(dni);

      if (!voterData) {
        // Generar datos simulados del votante
        voterData = generateMockVoterData(dni);
        // Guardar en la base de datos simulada
        mockDB.addVoter(voterData);
      }

      // Guardar DNI y datos en sessionStorage para usar en la votación
      sessionStorage.setItem("voter_dni", dni);
      sessionStorage.setItem("voter_data", JSON.stringify(voterData));
      
      toast.success("Verificación exitosa. Redirigiendo...");
      
      // Redirigir a la página de votación
      setTimeout(() => {
        navigate("/votar");
      }, 1000);
    } catch (error) {
      console.error("Error verificando DNI:", error);
      toast.error("Error al verificar el DNI");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Elecciones Perú 2025</h1>
              <p className="text-muted-foreground">Sistema de Votación Electoral</p>
            </div>
            <CardTitle className="text-2xl">Verificación de identidad</CardTitle>
            <CardDescription>
              Ingrese su DNI para acceder al sistema de votación
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDniSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dni">DNI (8 dígitos)</Label>
                <Input
                  id="dni"
                  type="text"
                  placeholder="Ingresa tu DNI (8 dígitos)"
                  value={dni}
                  onChange={(e) => setDni(e.target.value.replace(/\D/g, "").slice(0, 8))}
                  maxLength={8}
                  required
                  className="text-lg"
                  autoFocus
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-peru hover:opacity-90 text-lg py-6"
                disabled={loading || dni.length !== 8}
              >
                {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                Iniciar Votación
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;

