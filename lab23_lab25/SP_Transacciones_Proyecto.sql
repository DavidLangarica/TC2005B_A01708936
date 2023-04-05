DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeletePregunta` (IN `pregunta_id` INT)   BEGIN
    DECLARE tipo_pregunta_id INT;

    -- Manejador de errores
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
    END;

    -- Iniciar la transacción
    START TRANSACTION;

    -- Obtener el id_tipo_pregunta
    SELECT id_tipo_pregunta INTO tipo_pregunta_id
    FROM preguntas
    WHERE id = pregunta_id;
    
    -- Eliminar las respuestas asociadas a la pregunta
    DELETE FROM respuestas
    WHERE id_pregunta = pregunta_id;

    -- Eliminar las opciones de respuesta si id_tipo_pregunta es 3
    IF tipo_pregunta_id = 3 THEN
        DELETE FROM opciones_respuestas
        WHERE id IN (
            SELECT id_opcion
            FROM preguntas_opciones
            WHERE id_pregunta = pregunta_id
        );
    END IF;

    -- Eliminar la pregunta
    DELETE FROM preguntas
    WHERE id = pregunta_id;

    -- Confirmar la transacción si todo fue exitoso
    COMMIT;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `EditPregunta` (IN `pregunta_id` INT, IN `nueva_pregunta` VARCHAR(255), IN `nueva_predeterminada` BOOLEAN, IN `nuevo_id_tipo_pregunta` INT, IN `nuevas_opciones` TEXT)   BEGIN
    DECLARE tipo_pregunta_id INT;
    DECLARE opcion_actual VARCHAR(255);
    DECLARE separator INT;
    DECLARE opciones_actuales TEXT;

    -- Declarar el manejador de errores
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
    END;

    -- Iniciar la transacción
    START TRANSACTION;

    -- Obtener el id_tipo_pregunta y las opciones actuales
    SELECT id_tipo_pregunta, GROUP_CONCAT(opciones_respuestas.opcion_respuesta) INTO tipo_pregunta_id, opciones_actuales
    FROM preguntas
    LEFT JOIN preguntas_opciones ON preguntas.id = preguntas_opciones.id_pregunta
    LEFT JOIN opciones_respuestas ON preguntas_opciones.id_opcion = opciones_respuestas.id
    WHERE preguntas.id = pregunta_id
    GROUP BY preguntas.id;

    -- Actualizar la pregunta, predeterminada e id_tipo_pregunta
    UPDATE preguntas
    SET pregunta = nueva_pregunta, predeterminada = nueva_predeterminada, id_tipo_pregunta = nuevo_id_tipo_pregunta
    WHERE id = pregunta_id;

    -- Si el id_tipo_pregunta original es 3 y las opciones han cambiado, eliminar las opciones de respuesta actuales
    IF tipo_pregunta_id = 3 THEN
        DELETE FROM opciones_respuestas
        WHERE id IN (
            SELECT id_opcion
            FROM preguntas_opciones
            WHERE id_pregunta = pregunta_id
        );
    END IF;

    -- Si el nuevo id_tipo_pregunta es 3 y las opciones han cambiado, agregar las nuevas opciones de respuesta
    IF nuevo_id_tipo_pregunta = 3 THEN
        WHILE LENGTH(nuevas_opciones) > 0 DO
            SET separator = LOCATE(',', nuevas_opciones);

            IF separator > 0 THEN
                SET opcion_actual = TRIM(LEFT(nuevas_opciones, separator - 1));
                SET nuevas_opciones = SUBSTRING(nuevas_opciones, separator + 1);
            ELSE
                SET opcion_actual = TRIM(nuevas_opciones);
                SET nuevas_opciones = '';
            END IF;

            INSERT INTO opciones_respuestas(opcion_respuesta)
            VALUES (opcion_actual);

            INSERT INTO preguntas_opciones(id_pregunta, id_opcion)
            VALUES (pregunta_id, LAST_INSERT_ID());
        END WHILE;
    END IF;

    -- Confirmar la transacción si todo fue exitoso
    COMMIT;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertPregunta` (IN `pregunta_id` INT, IN `nueva_pregunta` VARCHAR(255), IN `es_predeterminada` BOOLEAN, IN `tipo_pregunta_id` INT, IN `opciones_respuesta` TEXT)   BEGIN
    DECLARE opcion_actual VARCHAR(255);
    DECLARE separator INT;

    -- Declarar el manejador de errores
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
    END;

    -- Iniciar la transacción
    START TRANSACTION;

    -- Insertar la nueva pregunta
    INSERT INTO preguntas(id, pregunta, predeterminada, id_tipo_pregunta)
    VALUES (pregunta_id, nueva_pregunta, es_predeterminada, tipo_pregunta_id);

    IF tipo_pregunta_id = 3 THEN
        BEGIN
          WHILE LENGTH(opciones_respuesta) > 0 DO

              SET separator = LOCATE(',', opciones_respuesta);
              IF separator > 0 THEN
                  SET opcion_actual = TRIM(SUBSTRING(opciones_respuesta, 1, separator - 1));
                  SET opciones_respuesta = TRIM(SUBSTRING(opciones_respuesta, separator + 1));
              ELSE
                  SET opcion_actual = TRIM(opciones_respuesta);
                  SET opciones_respuesta = '';
              END IF;

              IF LENGTH(opcion_actual) > 0 THEN
                  -- Insertar la opción de respuesta y asociarla con la pregunta
                  INSERT INTO opciones_respuestas(opcion_respuesta)
                  VALUES (opcion_actual);

                  INSERT INTO preguntas_opciones(id_pregunta, id_opcion)
                  VALUES (pregunta_id, LAST_INSERT_ID());
              END IF;
          END WHILE;
        END;
    END IF;

    -- Confirmar la transacción si todo fue exitoso
    COMMIT;

END$$
