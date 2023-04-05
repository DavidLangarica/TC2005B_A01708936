SELECT Descripcion, fecha
FROM Materiales as M, Entregan E, Proyectos P
WHERE M.clave = E.clave AND P.numero = E.numero
AND Denominacion="Queretaro limpio"
ORDER BY Descripcion ASC

SELECT razonsocial, SUM(cantidad) CantTotal
FROM proveedores p, entregan e
WHERE p.rfc = e.rfc
GROUP BY razonsocial
HAVING SUM(cantidad)>1000
ORDER BY cantidad DESC

SELECT Descripcion, COUNT(*) Entregas
FROM materiales m, entregan e
WHERE m.clave = e.clave
AND e.fecha BETWEEN '2000-01-01' AND '2009-01-01'
GROUP BY m.descripcion
ORDER BY cantidad DESC
 
SELECT razonsocial, COUNT(*) Entregas
FROM proveedores p, entregan e
WHERE p.rfc = e.rfc
HAVING COUNT(*) > (SELECT COUNT(*)
                   FROM proveedores p, entregan e 
                   WHERE p.rfc = e.rfc
                   AND razonsocial = 'Oviedo')
