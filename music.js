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