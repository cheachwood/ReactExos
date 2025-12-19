import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Phone, Building2, MapPin } from 'lucide-react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const TableUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        // Utilisation d'axios pour récupérer les données
        const response = await axios.get<User[]>(url);
        setUsers(response.data);

        // Alternative avec fetch API
        // fetch(url)
        //   .then((res) => res.json())
        //   .then((data) => setUsers(data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching users:', error);
        setError('Impossible de charger les utilisateurs');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-slate-700 border-t-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="bg-slate-900 border border-red-900/50 p-6 rounded-lg">
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header minimaliste */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-100">Utilisateurs</h1>
          <p className="text-slate-400">{users.length} utilisateurs enregistrés</p>
        </div>

        {/* Card avec design sombre */}
        <Card className="bg-slate-900 border-slate-800 shadow-2xl">
          <CardHeader className="border-b border-slate-800">
            <CardTitle className="text-slate-100 text-xl font-semibold">Liste complète</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-800 hover:bg-slate-800/50">
                    <TableHead className="text-slate-400 font-medium">Utilisateur</TableHead>
                    <TableHead className="text-slate-400 font-medium">Contact</TableHead>
                    <TableHead className="text-slate-400 font-medium">Entreprise</TableHead>
                    <TableHead className="text-slate-400 font-medium">Localisation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id} className="border-slate-800 hover:bg-slate-800 transition-colors group">
                      {/* Utilisateur */}
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 bg-slate-800 border border-slate-700">
                            <AvatarFallback className="bg-slate-800 text-slate-300 text-sm font-medium">
                              {user.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-slate-200">{user.name}</div>
                            <div className="text-sm text-slate-500">@{user.username}</div>
                          </div>
                        </div>
                      </TableCell>

                      {/* Contact */}
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-slate-300">
                            <Mail className="h-3.5 w-3.5 text-slate-500" />
                            {user.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Phone className="h-3.5 w-3.5 text-slate-500" />
                            {user.phone.split(' ')[0]}
                          </div>
                        </div>
                      </TableCell>

                      {/* Entreprise */}
                      <TableCell>
                        <div className="space-y-1">
                          <Badge className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">
                            <Building2 className="h-3 w-3 mr-1.5" />
                            {user.company.name}
                          </Badge>
                          <p className="text-xs text-slate-500 max-w-xs truncate">{user.company.catchPhrase}</p>
                        </div>
                      </TableCell>

                      {/* Localisation */}
                      <TableCell>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-slate-500 mt-0.5" />
                          <div>
                            <div className="text-sm text-slate-300">{user.address.city}</div>
                            <div className="text-xs text-slate-500">{user.address.street}</div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Stats minimalistes */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
            <div className="text-2xl font-bold text-slate-100">{users.length}</div>
            <div className="text-sm text-slate-400">Utilisateurs</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
            <div className="text-2xl font-bold text-slate-100">{new Set(users.map((u) => u.company.name)).size}</div>
            <div className="text-sm text-slate-400">Entreprises</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
            <div className="text-2xl font-bold text-slate-100">{new Set(users.map((u) => u.address.city)).size}</div>
            <div className="text-sm text-slate-400">Villes</div>
          </div>
        </div>
      </div>
    </div>
  );
};
