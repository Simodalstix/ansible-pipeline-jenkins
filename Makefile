.PHONY: deploy check clean

deploy:
	ansible-playbook playbooks/site.yml

jenkins:
	ansible-playbook playbooks/site.yml --tags jenkins

nexus:
	ansible-playbook playbooks/site.yml --tags nexus

sonar:
	ansible-playbook playbooks/site.yml --tags sonarqube

check:
	ansible-playbook playbooks/site.yml --check

clean:
	ansible-playbook playbooks/cleanup.yml

vault-edit:
	ansible-vault edit group_vars/all/vault.yml

vault-create:
	ansible-vault create group_vars/all/vault.yml