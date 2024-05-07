package com.example.riskassessment.Services;

import com.example.riskassessment.DAO.Entities.Menace;
import com.example.riskassessment.DAO.Repositories.menaceRepo;
import com.example.riskassessment.Services.Interfaces.IMenaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MenaceService implements IMenaceService {
    private final menaceRepo mRepo;

    @Override
    public Menace addMenace(Menace a) {
        return mRepo.save(a);
    }

    @Override
    public Menace findById(long id) {return mRepo.findById(id).get();
    }

    @Override
    public List<Menace> findAll() {
        return mRepo.findAll();
    }

    @Override
    public Menace updateMenace(Menace a) {
        return mRepo.save(a);
    }

    @Override
    public void deleteMenace(long id) {
        mRepo.deleteById(id);
    }

    @Override
    public void deleteMenace(Menace a) {
        mRepo.delete(a);
    }

    @Override
    public void affecterMenaceAVuln(long idvuln, long idmenace) {

    }

}