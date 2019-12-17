dump:
	docker exec -it database mysqldump -h127.0.0.1 --port 3306 db > database/DUMP.sql

migrate:
	docker exec -it api npm run migrate
