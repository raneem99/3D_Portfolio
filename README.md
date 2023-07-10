# 3D_Portfolio

1. main.js:

Ich beginne mit der Definition zweier Konstanten: „NUM_STARS“, die die Anzahl der Sterne in der Galaxie darstellt, und „GALAXY_RADIUS“, die den maximalen Radius definiert, innerhalb dessen die Sterne gestreut werden.

Als nächstes erstelle ich eine neue Instanz der Klasse „THREE.Scene“, um alle 3D-Objekte im Portfolio zu speichern.

Mit der Klasse „THREE. PerspectiveCamera“ erstelle ich eine Perspektivkamera mit einem Sichtfeld von 75 Grad, einem Seitenverhältnis, das auf der inneren Breite und Höhe des Fensters basiert, und Nah- und Fernausschnittebenen, die den sichtbaren Bereich bestimmen. Die Kamera ist bei z = 2000 positioniert.

Um die 3D-Szene zu rendern, erstelle ich eine neue Instanz der Klasse „THREE. WebGLRenderer“. Seine Größe wird so eingestellt, dass sie mit der inneren Breite und Höhe des Fensters übereinstimmt, und das DOM-Element des Renderers wird an das „canvas-container“-Div im HTML angehängt.

Um die Sterne zu erstellen, verwende ich eine Puffergeometrie, „THREE. BufferGeometry“, die große Sätze von Scheitelpunkten effizient verwaltet. Ich generiere zufällige Positionen für jeden Stern in sphärischen Koordinaten, basierend auf dem „GALAXY_RADIUS“. Die Positionen werden mithilfe sphärischer Koordinatenformeln berechnet und im Array „starPositions“ gespeichert.

Die Positionen werden dann dem Attribut „position“ der „starGeometry“ zugewiesen. Es wird ein Punktmaterial, „THREE. PointsMaterial“, erstellt, das die Farbe der Sterne auf Weiß setzt.

Mithilfe von „starGeometry“ und „starMaterial“ wird ein „THREE.Points“-Objekt erstellt, das eine Reihe von als Punkte gerenderten Partikeln darstellt. Es wird der Szene mit der Methode „scene. add(stars)“ hinzugefügt.

Ich erstelle einen Mond mit einem „THREE.Sphere Geometry“-Objekt mit einem Radius von 200 Einheiten und 32 horizontalen und vertikalen Segmenten. Die visuellen Eigenschaften werden mithilfe eines „THREE.MeshPhongMaterial“ mit einer hellgrauen Farbe definiert. Das Mondobjekt wird als „DREI. Netz“ erstellt, das Geometrie und Material kombiniert. Anschließend wird es der Szene hinzugefügt.

Ich füge der Szene Beleuchtung hinzu, einschließlich eines Umgebungslichts, das für Gesamtbeleuchtung sorgt, und eines Punktlichts, das Licht von einer bestimmten Position aus wirft.

Um die Szene zu animieren, definiere ich die Funktion „animate“, die rekursiv aufgerufen wird. Innerhalb dieser Funktion erhöhe ich die Rotation der Sterne und des Mondes, um die gewünschte Bewegung zu erzeugen. Der Mond dreht sich um seine vertikale Achse und seine Position wird basierend auf der aktuellen Zeit und einem kleinen Wert zur Steuerung der Bewegungsgeschwindigkeit aktualisiert. Die Szene wird mit der aktualisierten Kameraperspektive mithilfe der Methode „renderer. render(scene, camera)“ gerendert.

Zum Schluss rufe ich die Funktion „animate()“ auf, um die Animationsschleife zu starten.

2. index.html:

Die HTML-Datei legt die Grundstruktur der Webseite fest. Es enthält die notwendigen HTML-Elemente.


3. style.css: 

Die CSS-Datei enthält zwei Stile. Der „Body“-Stil setzt den Rand auf 0 und entfernt alle Standardabstände auf der Seite. Die Eigenschaft „overflow“ ist auf „hidden“ gesetzt, um sicherzustellen, dass keine Bildlaufleisten angezeigt werden, selbst wenn der Inhalt überläuft.

Der Stil „#canvas-container“ legt die Breite auf 100 % und die Höhe auf 100 vh (100 % der Höhe des Ansichtsfensters) fest. Dadurch wird sichergestellt, dass das Canvas-Container-Div den gesamten sichtbaren Bereich des Browserfensters einnimmt.
