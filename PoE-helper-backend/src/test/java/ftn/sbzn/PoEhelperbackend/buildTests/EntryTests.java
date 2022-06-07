package ftn.sbzn.PoEhelperbackend.buildTests;

import org.junit.Test;
import org.kie.api.KieServices;
import org.kie.api.builder.KieScanner;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.AgendaFilter;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class EntryTests {


    @Test
    public void firstEntryTest() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kContainer = ks
                .newKieContainer(ks.newReleaseId("sbnz.projekat", "poe-helper-kjar", "0.0.1-SNAPSHOT"));
        KieScanner kScanner = ks.newKieScanner(kContainer);
        kScanner.start(10_000);
        KieSession session = kContainer.newKieSession("ksession-rules");
        AgendaFilter filter = match -> {
            return match.getRule().getName().equals("Collect all tags");
        };




        session.getAgenda().getAgendaGroup("build").setFocus();
        long count = session.fireAllRules(filter);
    }

    @Test
    public void secondEntryTest() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kContainer = ks
                .newKieContainer(ks.newReleaseId("sbnz.projekat", "poe-helper-kjar", "0.0.1-SNAPSHOT"));
        KieScanner kScanner = ks.newKieScanner(kContainer);
        kScanner.start(10_000);
        KieSession session = kContainer.newKieSession("ksession-rules");
        AgendaFilter filter = match -> {
            return match.getRule().getName().equals("Collect all tags");
        };


        session.getAgenda().getAgendaGroup("build").setFocus();
        long count = session.fireAllRules(filter);
    }
}
