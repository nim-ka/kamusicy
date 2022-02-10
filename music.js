let sequencer = new Sequencer();

sequencer.addTrack("t", `120
24
0

nv saw2
    d n

    r 8

    r 1/4
    n 1/2 A4 P 1/4 1/4+1/16 C5
    r 1/4

    r 1/4
    n 1/2 Bb4 P 1/4 1/4+1/16 C5
    n 1/4 Bb4

    n 1/2 A4 P 1/4 1/4+1/16 C5
    r 1/4+1/8
i saw
    n 1/8 E4

    n 1/2 F4
    n 1/2 E4
i saw2

    r 1/8
    n 1/8 C4
    n 1/2 A4 P 1/4 1/4+1/16 C5
    r 1/4

    r 1/4
    n 1/2 E5 P 1/4 1/4+1/16 D5
    n 1/8 C5
    n 1/8 Bb4

    n 1/2 C5 P 1/4 1/4+1/16 A4
    r 1/4+1/8
i saw
    n 1/8 B3

    n 1/2 C4
    n 1/2 B3
i saw2

i pulse

    pw 50

    r 1/4
    n 1/2 A4 P 1/4 1/4+1/16 C5
    r 1/4

    r 1/4
    n 1/2 Bb4 P 1/4 1/4+1/16 C5
    n 1/4 Bb4

    n 1/2 A4 P 1/4 1/4+1/16 C5
    r 1/4+1/8
pw 25
    n 1/8 E4

    n 1/2 F4 m 25 0 50
    n 1/2 E4 m 50 0 25
pw 50

    r 1/8
    n 1/8 C4
    n 1/2 A4 P 1/4 1/4+1/16 C5
    r 1/4

    r 1/4
    n 1/2 E5 P 1/4 1/4+1/16 D5
    n 1/8 C5
    n 1/8 Bb4

    n 1/2 C5 P 1/4 1/4+1/16 A4
    r 1/4+1/8
pw 25
    n 1/8 B3

    n 1/2 C4 m 25 0 50
    n 1/2 B3 m 50 0 25
pw 50

nv saw
    d p

ls 3
    r 1/4
    n 1/4 G4,B4,E5,G5 P 0 1/32 A4,C5,E5,E5 S
    r 1/4
    n 1/4 A4,C5,E5 S

    r 1/4
    n 1/4 A4,C5,E5 P 0 1/32 Bb4,D5,F5 S
    r 1/4
    n 1/4 Bb4,D5,F5 S

    r 1/4
    n 1/4 Bb4,D5,F5 P 0 1/32 A4,C5,E5 S
    r 1/4
    n 1/4 A4,C5,E5 S

    r 1/4
    n 1/4 A4,C5,E5 P 0 1/32 Ab4,Db5,Eb5 S
    r 1/4
    n 1/4 Ab4,C5,Eb5 S

    r 1/4
    n 1/4 Ab4,C5,Eb5 P 0 1/32 A4,C5,E5 S
    r 1/4
    n 1/4 A4,C5,E5 S

    r 1/4
    n 1/4 A4,C5,E5 P 0 1/32 Bb4,D5,F5 S
    r 1/4
    n 1/4 Bb4,D5,F5 S

    r 1/4
    n 1/4 Bb4,D5,F5,F5 P 0 1/32 A4,D5,F5,A5 S
    r 1/4
    n 1/4 A4,C5,F5,A5 S

    r 1/4
    n 1/4 A4,C5,F5,A5 P 0 1/32 G4,C5,E5,G5 S
    r 1/4
    n 1/4 G4,B4,E5,G5 S
le

nv tri
    d F
    oct on

ls 3
    n 1/2 G1 P 0 1/8 A1
    n 1/2 A1

    n 1/2 Bb1
    n 1/2 Bb1

    n 1/2 Bb1 P 0 1/8 A1
    n 1/4+1/8 A1
    n 1/8 Gb1

    n 1/2 Ab1
    n 1/2 Ab1

    n 1/2 G1 P 0 1/8 A1
    n 1/2 A1

    n 1/2 Bb1
    n 1/2 Bb1

    n 1/2 E2 P 0 1/8 D2
    n 1/4+1/8 D2
    n 1/8 B1

    n 1/2 C2
    n 1/2 B1
le

	oct

nv tri2
    d p
    oct on

ls 3
    n 1/2 G1 P 0 1/8 A1
    n 1/2 A1

    n 1/2 Bb1
    n 1/2 Bb1

    n 1/2 Bb1 P 0 1/8 A1
    n 1/4+1/8 A1
    n 1/8 Gb1

    n 1/2 Ab1
    n 1/2 Ab1

    n 1/2 G1 P 0 1/8 A1
    n 1/2 A1

    n 1/2 Bb1
    n 1/2 Bb1

    n 1/2 E2 P 0 1/8 D2
    ds p P
    cn 3/2 D2
    r 1/4+1/8
    n 1/8 B1

    n 1/2 C2
    n 1/2 B1
le

	oct

nv sin
    d M
	
	oct on

ls 3
    ls 8
        n 1 Ad1
    le
le
`);

sequencer.addTrack("amogus", `80
Infinity
0

nv pulse
    d n
    pw 40
    n 1/8 C4 m 40 0 50 s
    r 1/8
    r 1/8
    n 1/8 Eb4 m 40 0 50
    n 1/4 F4 P 1/8 1/8+1/32 Gb4 m 40 0 50
    n 1/8 F4 m 40 0 50
    n 1/8 Eb4 m 40 0 50
    n 1/8 C4 m 40 0 50 s
    r 1/8
    r 1/8
    n 1/16 Bb3 m 40 0 50
    n 1/16 D4 m 40 0 50
    n 1/8 C4 m 40 0 50 s
    r 1/8
    r 1/8

i sin tri tri2
    d f

    n 1/8 G1,G2
    n 1/8 C2,C3

i pulse
    d n

    r 1/4
    n 1/8 Eb4 m 40 0 50
    n 1/4 F4 P 1/8 1/8+1/32 Gb4 m 40 0 50
    n 1/8 F4 m 40 0 50
    n 1/2 Eb3,Eb4 P 1/8 1/8+1/32 Gb3,Gb4 m 40 0 50
    r 1/8
    n 1/12 Gb4 m 40 0 50
    n 1/12 F4 m 40 0 50
    n 1/12 Eb4 m 40 0 50
    n 1/12 Gb4 m 40 0 50
    n 1/12 F4 m 40 0 50
    n 1/12 Eb4 m 40 0 50
    n 1/8 C4 m 40 0 50 s
    r 1/8
    r 1/8
    n 1/8 Eb4 m 40 0 50
    n 1/4 F4 P 1/8 1/8+1/32 Gb4 m 40 0 50
    n 1/8 F4 m 40 0 50
    n 1/8 Eb4 m 40 0 50
    n 1/8 C4 m 40 0 50 s
    r 1/8
    r 1/8
    n 1/16 Bb3 m 40 0 50
    n 1/16 D4 m 40 0 50
    n 1/8 C4 m 40 0 50 s
    r 1/8
    r 1/8

i sin tri tri2
    d f

    n 1/8 G1,G2
    n 1/8 C2,C3

nv saw
    d 0.075

    r 1+1/4+1/8
ls 11
    r 1/4+1/8
    n 1/8 C5,Eb5,G5 s
le

nv noise2
    d n

ls 7
    n 1/8 A3 S
    r 1/8
    n 1/8 A4 S
    r 1/8
    n 1/8 A3 S
    r 1/8
    n 1/8 A4 S
    r 1/8
le
`);

sequencer.addTrack("c", `180
4000
0

nv sin
    d n
    legato off

    pw 45

    r 4

    n 1/4 C5
    n 1/4 C5
    n 1/4 C5
    n 1/4 C5

    n 1/8 D5
    n 1/8 C5
    n 1/8 B4
    n 1/8 C5
    n 1/4 G5
    n 1/4 G5

    n 1/8 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 D5
    n 3/8 Eb5
    n 1/8 C5

    n 1/8 Eb5
    n 1/8 D5
    n 1/8 C5
    n 1/8 B4
    n 1/4 C5
    n 1/8 C5
    n 1/8 G4

    n 1/4 C5
    n 1/4 C5
    n 1/4 C5
    n 1/4 C5

    n 1/8 D5
    n 1/8 C5
    n 1/8 B4
    n 1/8 C5
    n 3/8 G5
    n 1/8 G5

    n 1/8 G5
    n 1/8 F5
    n 1/8 D5
    n 1/8 Eb5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 D5
    n 1/8 B4

    n 1/8 C5
    r 7/8

    n 1/4 Eb4,G4,C5
    n 1/4 Eb4,G4,C5
    n 1/4 Eb4,G4,C5
    n 1/4 Eb4,G4,C5

    n 1/8 G4,D5
    n 1/8 Ab4,C5
    n 1/8 G4,B4
    n 1/8 F4,C5
    n 1/4 D4,G4,B4,D5,G5
    n 1/4 D4,G4,B4,D5,G5

    n 1/8 G4,G5
    n 1/8 F4,F5
    n 1/8 Eb4,Eb5
    n 1/8 D4,D5
    n 1/4 Eb4,G4,Bb4,Eb5 s
    n 1/8 D4,G4,Bb4,D5
    n 1/8 C4,C5

    n 1/8 Eb4,Ab4,B4,Eb5
    n 1/8 D4,D5
    n 1/8 C4,C5
    n 1/8 B3,B4
    n 1/4 C4,Eb4,G4,C5
    n 1/8 C4,Eb4,G4,C5
    n 1/8 B3,D4,G4,Ab5

    n 1/4 Eb4,G4,C5
    n 1/4 Eb4,G4,C5
    n 1/4 Eb4,G4,C5
    n 1/4 Eb4,G4,C5

    n 1/8 G4,D5
    n 1/8 Ab4,C5
    n 1/8 G4,B4
    n 1/8 F4,C5
    n 3/8 D4,G4,B4,D5,G5
    n 1/8 D4,G4,B4,D5,G5

    n 3/8 C4,Ab4,C5,Eb5,Ab5
    n 1/8 C4,Ab4,C5,Eb5,Ab5
    n 3/8 Db4,F4,Ab4,C5,F5
    n 1/8 Db4,F4,Ab4,C5,F5

    n 3/8 B3,F4,B4,D5,G5
    n 1/8 B3,F4,B4,D5,G5
    n 3/8 D4,F4,Ab4,B4,D4
    n 1/8 D4,F4,Ab4,B4,D4

    ds n m
    n 1 C4,Eb4,G4,C5

    n 1/8 G4
    n 1/8 Ab4
    n 1/8 G4
    n 1/8 F4
    n 1/8 Eb4
    n 1/8 F4
    n 1/8 Eb4
    n 1/8 Db4

    ds n p
    cn 4 C4 d
    r 1/4
    cn 4-1/4 Eb4 d
    r 1/32
    cn 4-1/4-1/32 G4 d
    r 1/32
    cn 4-1/4-2/32 Bb4 d
    r 1/32
    cn 4-1/4-3/32 C5 d
    r 1/32
    cn 4-1/4-4/32 Eb5 d
    r 1/32
    n 4-1/4-5/32 G5 d

nv tri
    d n
    legato off

    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s

    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 C3 s
    n 1/4 D3,G3 s
    n 1/4 G2 s
    n 1/4 D3,G3 s
    n 1/4 B2 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 D3,G3 s
    n 1/4 B2 s
    n 1/4 D3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s

    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 B2 s
    n 1/4 D3,G3 s
    n 1/4 G2 s
    n 1/4 D3,G3 s
    n 1/4 B2 s
    n 1/4 D3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s

    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 C3 s
    n 1/4 D3,G3 s
    n 1/4 G2 s
    n 1/4 D3,G3 s
    n 1/4 B2 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 D3,G3 s
    n 1/4 B2 s
    n 1/4 D3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s

    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 B2 s
    n 1/4 D3,G3 s
    n 1/4 G2 s
    n 1/4 D3,G3 s
    n 1/4 Ab2,Ab3
    n 1/4 Ab2,Ab3
    n 1/4 F2,F3
    n 1/4 F2,F3
    n 1/4 G2,G3
    n 1/4 F2,F3
    n 1/4 D2,D3
    n 1/4 B1,B2

    n 1/4 C2,C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s
    n 1/4 C3 s
    n 1/4 Eb3,G3 s
    n 1/4 G2 s
    n 1/4 Eb3,G3 s

    n 1/4 C3
    n 1/2 Eb3,G3
    n 1/4 Eb3,G3
    n 1/4 G2
    n 1/2 Eb3,G3
    n 1/4 Eb3,G3
    n 1/4 C3
    n 1/2 Eb3,G3
    n 1/4 Eb3,G3
    n 1/4 G2
    n 1/2 Eb3,G3
    n 1/4 Eb3,G3

nv noise2
    d n

    ls 16
    	ls 8
			d f
			n 1/8 A3,A4 S
			d n
			r 1/8
			n 1/8 A4 S
			r 1/8
			n 1/8 A3,A4 S
			r 1/8
			n 1/8 A4 S
			r 1/8
		le
    le
`);

sequencer.addTrack("a", `180
40
0
 
nv pulse
    d n
    legato on
    legato super on
    
    ds m n
        n 1/8 G4 p 0 A4
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
    n 1/8 D5
    n 1/8 C5
    n 1/8 B4
    n 1/8 Ab4
 
    ds m n
        n 1/8 G4 p 0 A4
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
    n 1/8 B4
    n 1/8 Ab4
    n 1/4 F4
 
    ds m n
        n 1/8 G4 p 0 A4
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
    n 1/8 D5
    n 1/8 C5
    n 1/8 B4
    n 1/8 Ab4
 
    ds m n
        n 1/8 G4 p 0 A4
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
    n 1/8 B4
    n 1/8 Ab4
    n 1/4 E4 v 1/8 0.05
 
    ds m n
        n 1/8 G4 p 0 A4
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
    n 1/8 D5
    n 1/8 C5
    n 1/8 B4
    n 1/8 Ab4
 
    ds m n
        n 1/8 G4 p 0 A4
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
    n 1/8 B4
    n 1/8 Ab4
    n 1/4 F4
 
    ds m n
        n 1/8 G4 p 0 A4
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
    n 1/8 D5
    n 1/8 C5
    n 1/8 B4
    n 1/8 Ab4
 
    ds m n
        n 1/8 G4 p 0 A4
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
    n 1/8 B4
    n 1/8 Ab4
    
    i snoise2
        d f
        n 1/4 E3 p 0 E1
        d n
    
    i pulse
 
    oct 2
        ds m n
            n 1/8 G4 p 0 A4
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
        n 1/8 D5
        n 1/8 C5
        n 1/8 B4
        n 1/8 Ab4
 
        ds m n
            n 1/8 G4 p 0 A4
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
        n 1/8 B4
        n 1/8 Ab4
        n 1/4 F4 m 50 0 75
        ds n P
            pw 75
            cn 1/4 F4
            pw 50
 
        ds m n
            n 1/8 G4 p 0 A4
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
        n 1/8 D5
        n 1/8 C5
        n 1/8 B4
        n 1/8 Ab4
 
        ds m n
            n 1/8 G4 p 0 A4
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
        n 1/8 B4
        n 1/8 Ab4
        n 1/4 E4 m 50 0 75
        ds n P
            pw 75
            cn 1/4 E4
            pw 50
 
        ds m n
            n 1/8 G4 p 0 A4
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
        n 1/8 D5
        n 1/8 C5
        n 1/8 B4
        n 1/8 Ab4
 
        ds m n
            n 1/8 G4 p 0 A4
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
        n 1/8 B4
        n 1/8 Ab4
        n 1/4 F4 m 50 0 75
        ds n P
            pw 75
            cn 1/4 F4
            pw 50
 
        ds m n
            n 1/8 G4 p 0 A4
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
        n 1/8 E5
        n 1/8 D5
        n 1/8 C5
        n 1/8 Bb4
 
        ds m n
            n 1/8 A4 p 0 B4
        n 1/8 D5
        n 1/8 C5
        n 1/8 B4
        cn 1/2 A4 m 50 0 75
        r 1/4
        n 1/4 A1
 
    oct
    
    ds m n
        n 1/8 D5 p 0 E5
    n 1/8 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 E5
    n 1/8 C5
    n 1/8 B4
    n 1/8 C5
 
    ds m n
        n 1/8 D5 p 0 E5
    n 1/8 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 E5
    n 1/8 B4
    n 1/4 Ab4
 
    ds m n
        n 1/8 D5 p 0 E5
    n 1/8 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 E5
    n 1/8 C5
    n 1/8 B4
    n 1/8 C5
 
    ds m n
        n 1/8 D5 p 0 E5
    n 1/8 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 E5
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
 
    n 1/8 A4 v 0 0.05
    ds m n
        n 1/8 F5 p 0 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 E5
    n 1/8 C5
    n 1/8 B4
    n 1/8 C5
 
    ds m n
        n 1/8 D5 p 0 E5
    n 1/8 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 E5
    n 1/8 B4
    n 1/4 Ab4
 
    ds m n
        n 1/8 D5 p 0 E5
    n 1/8 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 E5
    n 1/8 C5
    n 1/8 B4
    n 1/8 C5
 
    ds m n
        n 1/8 D5 p 0 E5
    n 1/8 G5
    n 1/8 F5
    n 1/8 Eb5
    n 1/8 E5
    n 1/8 C5
    n 1/8 B4
    n 1/8 A4
 
    n 1/8 A4 v 0 0.05
    oct 2
        ds m n
            n 1/8 F5 p 0 G5
        n 1/8 F5
        n 1/8 Eb5
        n 1/8 E5
        n 1/8 C5
        n 1/8 B4
        n 1/8 C5
 
        ds m n
            n 1/8 D5 p 0 E5
        n 1/8 G5
        n 1/8 F5
        n 1/8 Eb5
        n 1/8 E5
        n 1/8 B4
        n 1/4 Ab4
 
        ds m n
            n 1/8 D5 p 0 E5
        n 1/8 G5
        n 1/8 F5
        n 1/8 Eb5
        n 1/8 E5
        n 1/8 C5
        n 1/8 B4
        n 1/8 C5
 
        ds m n
            n 1/8 D5 p 0 E5
        n 1/8 G5
        n 1/8 F5
        n 1/8 Eb5
        n 1/8 E5
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
 
        n 1/8 A4 v 0 0.05
        ds m n
            n 1/8 F5 p 0 G5
        n 1/8 F5
        n 1/8 Eb5
        n 1/8 E5
        n 1/8 C5
        n 1/8 B4
        n 1/8 C5
 
        ds m n
            n 1/8 D5 p 0 E5
        n 1/8 G5
        n 1/8 F5
        n 1/8 Eb5
        n 1/8 E5
        n 1/8 B4
        n 1/4 Ab4
 
        ds m n
            n 1/8 D5 p 0 E5
        n 1/8 G5
        n 1/8 F5
        n 1/8 Eb5
        n 1/8 E5
        n 1/8 C5
        n 1/8 B4
        n 1/8 C5
 
        ds m n
            n 1/8 D5 p 0 E5
        n 1/8 G5
        n 1/8 F5
        n 1/8 Eb5
        n 1/8 E5
        n 1/8 C5
        n 1/8 B4
        n 1/8 A4
 
        n 1/8 A4 v 0 0.05
    oct
 
    legato
 
nv tri
    d f
 
    r 8
 
    ds n f
        n 1/8 G1 p 0 A1
    r 1/4
    n 1/8 A1
    r 3/8
    n 1/8 Ab1
 
    ds n f
        n 1/8 G1 p 0 A1
    r 1/4
    n 1/8 A1
    r 1/8
    n 1/8 Ab1
    n 1/4 F1
 
    ds n f
        n 1/8 G1 p 0 A1
    r 1/4
    n 1/8 A1
    r 3/8
    n 1/8 Ab1
 
    ds n f
        n 1/8 G1 p 0 A1
    r 1/4
    n 1/8 A1
    r 1/8
    n 1/8 Ab1
    n 1/4 E1
 
    oct 2
        ds n f
            n 1/8 G1 p 0 A1
        r 1/4
        n 1/8 A1
        r 3/8
        n 1/8 Ab1
 
        ds n f
            n 1/8 G1 p 0 A1
        r 1/4
        n 1/8 A1
        r 1/8
        n 1/8 Ab1
        n 1/4 F1
 
        ds n f
            n 1/8 G1 p 0 A1
        r 1/4
        n 1/8 A1
        r 3/8
        n 1/8 Bb1
 
        ds n f
            n 1/8 A1 p 0 B1
        r 1/8
        n 1/8 C2
        n 1/8 B1
        n 1/4 A1
    oct
 
    r 12
 
    ; n 1/8 E2
    ; n 1/8 G2
    ; n 1/8 F2
    ; n 1/8 Eb2
    ; n 1/8 E2
    ; n 1/8 C2
    ; n 1/8 B1
    ; n 1/8 C2
 
nv noise2
    d n
 
    ls 4
        ls 8
            d f
            n 1/8 A3,A4 S
            d n
            r 1/8
            n 1/8 A4 S
            r 1/8
            n 1/8 A3,A4 S
            r 1/8
            n 1/8 A4 S
            r 1/8
        le
 
        d f
 
        ls 8
            d F
            n 1/8 A3,A4 S
            d f
            r 1/8
            n 1/8 A4 S
            r 1/8
            n 1/8 A3,A4 S
            r 1/8
            n 1/8 A4 S
            r 1/8
        le
    le
`);

sequencer.addTrack("l",`105\n16\n0\n\nnv sq\n\nd p\n\nr 7\n\nr 0.125\nn 0.125 E5\nn 0.125 E5\nn 0.125 E5\nn 0.25 E5\nn 0.125 C5\nn 0.125 E5\n\nn 0.25 Eb5 p 0.125 Bh4\nn 0.25 B4\nr 0.5\n\nr 0.125\nn 0.125 D5\nn 0.125 D5\nn 0.125 D5\nn 0.25 D5\nn 0.125 B4\nn 0.125 D5\n\nn 0.375 C5 v 0.25\nn 0.125 Bb4\nn 0.1875 B4 s\nr 0.0625\nn 0.083 E5\nn 0.084 C5\nn 0.083 B4\n\nn 0.125 A4\nn 0.125 E5,E6\nn 0.125 E5,E6\nn 0.125 E5,E6\nn 0.25 E5,E6\nn 0.125 C5,C6\nn 0.125 E5,E6\n\nn 0.25 Eb5,Eb6 p 0.125 Bh3,Bh3\nn 0.25 B4,B5\nr 0.5\n\nr 0.125\nn 0.125 D5\nn 0.125 D5\nn 0.125 D5\nn 0.25 D5\nn 0.125 C5\nn 0.125 D5\n\nn 0.125 E5\nn 0.125 D5\nn 0.125 C5\nn 0.125 B4\nn 0.25 A4 s\nr 0.25\n\nnv tri\n\nd n\n\nn 0.375 A2 s\nn 0.125 E3\nn 0.25 Eb3\nn 0.25 E3\n\nn 0.375 A2 s\nr 0.625\n\nn 0.375 A2 s\nn 0.125 E3\nn 0.25 Eb3\nn 0.25 E3\n\nn 0.125 A3 s\nn 0.125 Ab3 s\nn 0.125 G3 s\nn 0.125 Gb3 s\nn 0.25 F3\nn 0.25 F#3\n\nn 0.375 A2 s\nn 0.125 E3\nn 0.25 Eb3\nn 0.25 E3\n\nn 0.375 A2 s\nr 0.625\n\nn 0.375 A2 s\nn 0.125 E3\nn 0.25 Eb3\nn 0.25 E3\n\nn 0.25 A2,E3,G3,C4 s\nr 0.625\nn 0.125 A2,E3,G3,C4\n\nn 0.25 G2,D3,F3,B3 s\nr 0.375\nn 0.125 B2\nn 0.25 Bb2\n\nn 0.25 A2,D3,F3 s\nr 0.125\nn 0.125 F2 s\nn 0.25 E2 s\nn 0.25 D2 s\n\nn 0.375 C2\nn 0.125 Bb2,Bb3\nn 0.1875 B2,B3 s\nn 0.0625 D3\nn 0.0625 E3\nn 0.0625 D3\nn 0.0625 C3\nn 0.0625 B2\n\nn 0.25 A2\nn 0.25 D3,F3\nn 0.25 G2\nn 0.25 C3,E3\n\nn 0.25 Gb2\nn 0.25 B2,Eb3\nn 0.25 E2\nn 0.25 B2,G3\n\nn 0.25 A2\nn 0.25 E3,G3\nn 0.25 B2\nn 0.25 D3,F3\n\nn 0.1875 E3\nn 0.0625 D3\nn 0.1875 C3\nn 0.0625 B2\nn 0.25 A2,E3,A3,C4 s\nr 0.25\n\nnv noise\n\nls 16\nd 0.03\nn 0.125 C0 S\nr 0.125\nd 0.1\nn 0.125 C0 S\nr 0.125\nd 0.03\nn 0.125 C0 S\nr 0.125\nd 0.1\nn 0.125 C0 S\nr 0.125\nle\n`);

sequencer.addTrack("l2",`105\n16\n0\n\nnv sq\n\nd P\n\nr 7\n\nn 0.25 A6,E7,G7,C8 v 0 0.03\nn 0.25 A6,E7,G7,C8 v 0 0.03\nn 0.25 A6,E7,G7,C8 v 0 0.03\nn 0.25 A6,E7,G7,C8 v 0 0.03\nn 0.25 G6,D7,F7,B7 v 0 0.03\nn 0.25 G6,D7,F7,B7 v 0 0.03\nn 0.25 G6,D7,F7,B7 v 0 0.03\nn 0.25 G6,D7,F7,B7 v 0 0.03\nn 0.25 A6,D7,F7,A7 v 0 0.03\nn 0.25 A6,D7,F7,A7 v 0 0.03\nn 0.25 A6,D7,E7,A7 v 0 0.03\nn 0.25 F6,A7,D7,F7 v 0 0.03\nn 0.25 Eb6,Gb6,C7,Eb7 v 0 0.03\nn 0.25 Eb6,Gb6,C7,Eb7 v 0 0.03\nn 0.25 Eb6,Gb6,B6,Eb7 v 0 0.03\nn 0.25 Eb6,Gb6,B6,Eb7 v 0 0.03\n\nn 0.25 A6,D7,F7,C8 v 0 0.03\nn 0.25 A6,D7,F7,C8 v 0 0.03\nn 0.25 A6,E7,G7,C8 v 0 0.03\nn 0.25 A6,E7,G7,C8 v 0 0.03\nn 0.25 Gb6,Eb7,Gb7,B7 v 0 0.03\nn 0.25 Gb6,Eb7,Gb7,B7 v 0 0.03\nn 0.25 E6,G6,E7,B7 v 0 0.03\nn 0.25 E6,G6,E7,B7 v 0 0.03\nn 0.25 E6,A6,C7,E7 v 0 0.03\nn 0.25 E6,A6,C7,E7 v 0 0.03\nn 0.25 D6,F6,B6,D7 v 0 0.03\nn 0.25 D6,F6,B6,D7 v 0 0.03\nn 0.25 F6,A6,C7,F7 v 0 0.03\nn 0.25 E6,Ab6,B6,D7 v 0 0.03\nn 0.25 C6,E6,A6,C7 v 0 0.03\n\nnv sq\n\nd p\n\nr 7\n\nr 0.125\nn 0.125 E5\nn 0.125 E5\nn 0.125 E5\nn 0.25 E5\nn 0.125 C5\nn 0.125 E5\n\nn 0.25 Eb5 p 0.125 Bh4\nn 0.25 B4\nr 0.5\n\nr 0.125\nn 0.125 D5\nn 0.125 D5\nn 0.125 D5\nn 0.25 D5\nn 0.125 B4\nn 0.125 D5\n\nn 0.375 C5 v 0.25\nn 0.125 Bb4\nn 0.1875 B4 s\nr 0.0625\nn 0.083 E5\nn 0.084 C5\nn 0.083 B4\n\nn 0.125 A4\nn 0.125 E5,E6\nn 0.125 E5,E6\nn 0.125 E5,E6\nn 0.25 E5,E6\nn 0.125 C5,C6\nn 0.125 E5,E6\n\nn 0.25 Eb5,Eb6 p 0.125 Bh3,Bh3\nn 0.25 B4,B5\nr 0.5\n\nr 0.125\nn 0.125 D5\nn 0.125 D5\nn 0.125 D5\nn 0.25 D5\nn 0.125 C5\nn 0.125 D5\n\nn 0.125 E5\nn 0.125 D5\nn 0.125 C5\nn 0.125 B4\nn 0.25 A4 s\nr 0.25\n\nnv tri\n\nd n\n\nn 0.375 A2 s\nn 0.125 E3\nn 0.25 Eb3\nn 0.25 E3\n\nn 0.375 A2 s\nr 0.625\n\nn 0.375 A2 s\nn 0.125 E3\nn 0.25 Eb3\nn 0.25 E3\n\nn 0.125 A3 s\nn 0.125 Ab3 s\nn 0.125 G3 s\nn 0.125 Gb3 s\nn 0.25 F3\nn 0.25 F#3\n\nn 0.375 A2 s\nn 0.125 E3\nn 0.25 Eb3\nn 0.25 E3\n\nn 0.375 A2 s\nr 0.625\n\nn 0.375 A2 s\nn 0.125 E3\nn 0.25 Eb3\nn 0.25 E3\n\nn 0.25 A2,E3,G3,C4 s\nr 0.625\nn 0.125 A2,E3,G3,C4\n\nn 0.25 G2,D3,F3,B3 s\nr 0.375\nn 0.125 B2\nn 0.25 Bb2\n\nn 0.25 A2,D3,F3 s\nr 0.125\nn 0.125 F2 s\nn 0.25 E2 s\nn 0.25 D2 s\n\nn 0.375 C2\nn 0.125 Bb2,Bb3\nn 0.1875 B2,B3 s\nn 0.0625 D3\nn 0.0625 E3\nn 0.0625 D3\nn 0.0625 C3\nn 0.0625 B2\n\nn 0.25 A2\nn 0.25 D3,F3\nn 0.25 G2\nn 0.25 C3,E3\n\nn 0.25 Gb2\nn 0.25 B2,Eb3\nn 0.25 E2\nn 0.25 B2,G3\n\nn 0.25 A2\nn 0.25 E3,G3\nn 0.25 B2\nn 0.25 D3,F3\n\nn 0.1875 E3\nn 0.0625 D3\nn 0.1875 C3\nn 0.0625 B2\nn 0.25 A2,E3,A3,C4 s\nr 0.25\n\nnv noise\n\nls 16\nd P\nn 0.125 C0 S\nr 0.125\nd 0.085\nn 0.125 C0 S\nr 0.125\nd P\nn 0.125 C0 S\nr 0.125\nd 0.085\nn 0.125 C0 S\nr 0.125\nle\n`);

sequencer.addTrack("ch", `180
4000
0

nv sin
    d n
    legato on
    legato super on

    ds P n
    n 1/2 A1,A2,E3,A3,C#4,E4,F#4,A4,C#5 d
    ls 8
    ls 3
    n 1 A1,A2,E3,A3,C#4,E4,F#4,A4,C#5 p 1/2 A1,A2,E3,A3,C#4,E4,G#4,C#5,E5 d
    n 1 A1,A2,E3,A3,C#4,E4,G#4,C#5,E5 p 1/2 B1,B2,F#3,B3,D#4,F#4,A4,D#5,F#5 d
    n 1 B1,B2,F#3,B3,D#4,F#4,A4,D#5,F#5 p 1/2 A#1,A#2,G3,A#3,C#4,G4,A#4,C#5,E5 d
    n 1 A#1,A#2,G3,A#3,C#4,G4,A#4,C#5,E5 p 1/2 A1,A2,E3,A3,C#4,E4,F#4,A4,C#5 d
    le
    n 1 A1,A2,E3,A3,C#4,E4,F#4,A4,C#5 p 1/2 A1,A2,E3,A3,C#4,E4,G#4,C#5,E5 d
    n 1 A1,A2,E3,A3,C#4,E4,G#4,C#5,E5 p 1/2 B1,B2,F#3,B3,D#4,F#4,A4,D#5,F#5 d
    n 2 B1,B2,F#3,B3,D#4,F#4,A4,D#5,F#5 p 3/2 A1,A2,E3,A3,C#4,E4,F#4,A4,C#5 d
    le

nv noise2
    d n

    r 16

    ls 16
    	ls 8
			d f
			n 1/8 A3,A4 S
			d n
			r 1/8
			n 1/8 A4 S
			r 1/8
			n 1/8 A3,A4 S
			r 1/8
			n 1/8 A4 S
			r 1/8
		le
    le
`);

sequencer.addTrack("b", `120
Infinity
0

nv tri
    d n
    legato on

    n 3/4 F#4

    n 3/4 G4

    n 1/2 A4
    n 1/4 G4

    n 1/2 F#4
    n 1/32 D4
    n 1/4-1/32 E4

    n 1/2 D4
    n 1/4 D4

    n 3/4 E4

    n 1/2 F#4
    n 1/4 D4

    n 1/2 E4
    n 1/32 C4
    n 1/4-1/32 C#4

    n 3/4 B3

    n 3/4 F#4

    n 1/2 A4
    n 1/32 Ab4
    n 1/4-1/32 G4

    n 1/4 F#4
    n 1/4 F#4
    n 1/4 E4

    n 1/2 D4
    n 1/4 D4

    n 1/2 E4
    n 1/4 E4

    n 3/8 F#4
    n 1/8 G4
    n 1/4 D4

    n 1/2 E4
    n 1/32 C4
    n 1/4-1/32 C#4

    n 3/4 B3

    n 1/2 E4
    n 1/4 E4

    n 3/8 F#4
    n 1/8 E4
    n 1/4 D4

    n 1/2 E4
    n 1/32 D4
    n 1/4-1/32 C#4

    n 3/4 B3

    n 1/2 D4
    n 1/4 D4

    n 3/8 E4
    n 1/8 D4
    n 1/4 C#4

    n 1/2 D4
    n 1/32 C#4
    n 1/4-1/32 B3

    n 3/4 A3

    n 3/4 E4

    n 3/4 F#4

nv sin
    d n
    legato on

    r 10*3/4

    n 1/2 A2
    n 1/4 G2

    n 1/2 F#2
    n 1/4 G2

    n 3/4 A2

    n 3/4 E3

    n 1/2 A3
    n 1/32 Ab3
    n 1/4-1/32 G3

    n 1/4 E3
    n 1/4 F#3
    n 1/4 E3

    n 1/2 D3
    n 1/4 D3

    n 1/2 E3
    n 1/4 E3

    n 3/8 F#3
    n 1/8 G3
    n 1/4 D3

    n 1/2 E3
    n 1/32 C3
    n 1/4-1/32 C#3

    n 3/4 B2

    n 1/2 D3
    n 1/4 D3

    n 3/8 E3
    n 1/8 F#3
    n 1/4 C#3

    n 1/2 D3
    n 1/32 A#2
    n 1/4-1/32 B2

    n 3/4 A2

    n 3/4 C#3

    n 3/4 D3

nv sq
    d p
    legato on

    r 8*3/4

    n 3/4 F#5

    n 3/4 C#6

    n 1/2 E6
    n 1/4 C#6

    n 1/2 D6
    n 1/4 A5

    n 1/4 B5
    n 1/4 C#6
    n 1/4 B5

    n 1/2 A5
    n 1/4 G5

    n 1/4 F#5
    n 1/4 A5
    n 1/4 G5

    n 1/2 E5
    n 1/4 F#5

    n 3/4 D5

    n 3/4 E5

    n 3/4 D5

    n 1/2 G5
    n 1/4 F#5

    n 3/4 E5

    n 3/4 D5

    n 1/4 B5
    n 1/4 G5
    n 1/4 F#5

    n 1/4 D6
    n 1/4 B5
    n 1/4 A5

    n 3/2 F#6

    n 3/4 B5

nv tri
    d n
    legato on

    r 17*3/4

    n 3/4 E2

    n 3/4 B2

    n 1/2 E3
    n 1/4 C#3

    n 1/2 B2
    n 1/4 A2

    n 3/4 G2

    n 3/4 E3

    n 1/2 D3
    n 1/4 D3

    n 1/2 A2
    n 1/4 B2

    n 3/4 A#2

    n 3/4 B2
`);