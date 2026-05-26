CREATE PROCEDURE arviointi.addOpintosuoritus(
in en varchar(45),
in sn varchar(45),
in kuko varchar(45),
in arsa int(10))

Aliohjelma:BEGIN
	declare OpiskelijaID int default 0;
	declare KurssiID int default 0;

	select count(1) into OpiskelijaID from opiskelija where Etunimi = en and Sukunimi = sn;
	
	if OpiskelijaID = 0 then
		select 'Opiskelijaa ei ole olemassa';
		leave Aliohjelma;
	end if;
	
	select count(1) into KurssiID from opintojakso where Koodi = kuko;
	
	if KurssiID = 0 then
		select 'Kurssia ei ole olemassa';
		leave Aliohjelma;
	end if;
	
	if arsa < 0 or arsa > 5 then
		select 'Arvosanan pitaa olla 0-5 valilla.';
		leave Aliohjelma;
	end if;
	
	insert into arviointi(Päiväys, Arvosana, idOpiskelija, idOpintojakso) values(curdate(), arsa, OpiskelijaID, KurssiID);
END