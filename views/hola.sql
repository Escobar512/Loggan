SELECT
		 'Developers' AS KPI,
		 '$' AS UNIDAD,
		 '30MDP Anuales' AS META,
		 "Propietario de Trato Name" AS Personal,
		 EXTRACT(YEAR FROM "Hora de creación") AS Year,
		 /*-- January*/ /* January*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 1
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Enero,
		 2500000 as Objetivo_Enero,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 1
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Enero,
		 /*-- February*/ /* February*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 2
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Febrero,
		 2500000 as Objetivo_Febrero,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 2
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Febrero,
		 /*-- March*/ /* March*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 3
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Marzo,
		 2500000 as Objetivo_Marzo,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 3
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Marzo,
		 /*-- April*/ /* April*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 4
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Abril,
		 2500000 as Objetivo_Abril,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 4
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Abril,
		 /*-- May*/ /* May*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 5
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Mayo,
		 2500000 as Objetivo_Mayo,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 5
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Mayo,
		 /*-- June*/ /* June*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 6
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Junio,
		 2500000 as Objetivo_Junio,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 6
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Junio,
		 /*-- July*/ /* July*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 7
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Julio,
		 2500000 as Objetivo_Julio,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 7
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Julio,
		 /*-- August*/ /* August*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 8
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Agosto,
		 2500000 as Objetivo_Agosto,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 8
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Agosto,
		 /*-- September*/ /* September*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 9
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Septiembre,
		 2500000 as Objetivo_Septiembre,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 9
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Septiembre,
		 /*-- October*/ /* October*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 10
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Octubre,
		 2500000 as Objetivo_Octubre,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 10
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Octubre,
		 /*-- November*/ /* November*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 11
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Noviembre,
		 2500000 as Objetivo_Noviembre,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 11
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Noviembre,
		 /*-- December*/ /* December*/ ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 12
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END), 2) AS Resultados_Diciembre,
		 2500000 as Objetivo_Diciembre,
		 ROUND(SUM(CASE
				 WHEN EXTRACT(MONTH FROM "Hora de creación")  = 12
				 AND	"Tipo de proyecto"  = 'Developers' THEN Importe
				 ELSE 0
			 END) / 2500000, 2) AS Porcentaje_Diciembre
FROM  "Tratos (Zoho CRM)" 
GROUP BY Personal,
	  Year /* Esto es una muestra de una consulta SQL SELECT */
/*Utilice “Control + Barra espaciadora” para ver otras palabras clave*/ 
